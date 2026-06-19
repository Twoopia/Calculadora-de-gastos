from datetime import datetime, timedelta, timezone
from typing import Optional
import os
import bcrypt
from jose import JWTError, jwt
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from backend.repositories.user_repository import UserRepository
from backend.schemas.user import UserCreate, TokenResponse, UserResponse

SECRET_KEY = os.environ.get("SECRET_KEY", "smartexpense-dev-only-insecure-key-troque-em-producao")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode(), hashed.encode())


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    payload = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    )
    payload["exp"] = expire
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido ou expirado",
            headers={"WWW-Authenticate": "Bearer"},
        )


class AuthService:
    def __init__(self, db: Session) -> None:
        self.repo = UserRepository(db)

    def register(self, data: UserCreate) -> TokenResponse:
        if self.repo.email_exists(data.email):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="E-mail já cadastrado",
            )
        hashed = hash_password(data.password)
        user = self.repo.create(name=data.name, email=data.email, password_hash=hashed)
        token = create_access_token({"sub": str(user.id), "email": user.email})
        return TokenResponse(access_token=token, user=UserResponse.model_validate(user))

    def login(self, email: str, password: str) -> TokenResponse:
        user = self.repo.get_by_email(email.strip().lower())
        if not user or not verify_password(password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="E-mail ou senha incorretos",
            )
        token = create_access_token({"sub": str(user.id), "email": user.email})
        return TokenResponse(access_token=token, user=UserResponse.model_validate(user))
