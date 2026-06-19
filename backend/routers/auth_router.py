from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.schemas.user import UserCreate, UserLogin, TokenResponse
from backend.services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Autenticação"])


@router.post("/register", response_model=TokenResponse, status_code=201,
             summary="Cadastrar usuário")
def register(data: UserCreate, db: Session = Depends(get_db)):
    """Cria uma nova conta de usuário e retorna token de acesso."""
    return AuthService(db).register(data)


@router.post("/login", response_model=TokenResponse, summary="Login")
def login(data: UserLogin, db: Session = Depends(get_db)):
    """Autentica o usuário e retorna token de acesso."""
    return AuthService(db).login(data.email, data.password)
