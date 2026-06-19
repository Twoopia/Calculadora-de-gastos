import os
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

_DATABASE_URL = os.environ.get("DATABASE_URL")

if _DATABASE_URL:
    # Render entrega "postgres://..." mas SQLAlchemy 2.x exige "postgresql://"
    if _DATABASE_URL.startswith("postgres://"):
        _DATABASE_URL = _DATABASE_URL.replace("postgres://", "postgresql://", 1)
    engine = create_engine(_DATABASE_URL, pool_pre_ping=True)
else:
    import warnings
    warnings.warn("DATABASE_URL não definida — usando SQLite local (dados voláteis em produção).")
    DB_PATH = Path(__file__).resolve().parent.parent.parent / "smartexpense.db"
    engine = create_engine(
        f"sqlite:///{DB_PATH}",
        connect_args={"check_same_thread": False},
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    """Dependency de sessão do banco para injeção via FastAPI."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_tables() -> None:
    """Cria todas as tabelas na primeira execução."""
    from backend.models import user, income, expense  # noqa: F401 — garante registro dos models
    Base.metadata.create_all(bind=engine)
