import os
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from backend.database.connection import create_tables
from backend.routers import (
    auth_router,
    income_router,
    expense_router,
    dashboard_router,
    report_router,
)

_is_prod = os.environ.get("ENVIRONMENT") == "production"


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_tables()
    yield


app = FastAPI(
    title="SmartExpense API",
    description=(
        "Sistema de Controle Financeiro Pessoal\n\n"
        "**IFSC — Gerência de Projetos 2026/1**\n\n"
        "Integrantes: Rafael Becker · Arthur Rian · Leonardo Bion"
    ),
    version="1.0.0",
    docs_url=None if _is_prod else "/docs",
    redoc_url=None if _is_prod else "/redoc",
    lifespan=lifespan,
)

# Bearer tokens não precisam de allow_credentials — wildcard é seguro aqui
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registra todos os routers sob o prefixo /api
app.include_router(auth_router.router, prefix="/api")
app.include_router(income_router.router, prefix="/api")
app.include_router(expense_router.router, prefix="/api")
app.include_router(dashboard_router.router, prefix="/api")
app.include_router(report_router.router, prefix="/api")


# Serve o frontend como arquivos estáticos (deve ser montado por último)
_FRONTEND = Path(__file__).resolve().parent.parent / "frontend"
if _FRONTEND.exists():
    app.mount("/", StaticFiles(directory=str(_FRONTEND), html=True), name="frontend")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
