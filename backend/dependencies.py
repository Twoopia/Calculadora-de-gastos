from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.services.auth_service import decode_token
from backend.repositories.user_repository import UserRepository
from backend.models.user import User

_security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(_security),
    db: Session = Depends(get_db),
) -> User:
    """Valida o token JWT e retorna o usuário autenticado."""
    payload = decode_token(credentials.credentials)
    user_id = int(payload.get("sub", 0))
    user = UserRepository(db).get_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuário não encontrado",
        )
    return user
