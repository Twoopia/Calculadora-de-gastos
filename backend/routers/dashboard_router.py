from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.schemas.dashboard import DashboardSummary
from backend.services.dashboard_service import DashboardService
from backend.dependencies import get_current_user
from backend.models.user import User

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


@router.get("/", response_model=DashboardSummary, summary="Resumo financeiro")
def get_dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna o resumo financeiro do usuário: saldo, totais e contagens."""
    return DashboardService(db).get_summary(current_user.id)
