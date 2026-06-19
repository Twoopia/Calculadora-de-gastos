from datetime import date
from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.schemas.report import CategoryReport, IncomeVsExpenseReport
from backend.services.report_service import ReportService
from backend.dependencies import get_current_user
from backend.models.user import User

router = APIRouter(prefix="/reports", tags=["Relatórios"])


@router.get("/categories", response_model=list[CategoryReport], summary="Gastos por categoria")
def get_category_report(
    start_date: Optional[date] = Query(None, description="Data inicial do período"),
    end_date: Optional[date] = Query(None, description="Data final do período"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna relatório de gastos agrupado por categoria com percentuais."""
    return ReportService(db).get_expenses_by_category(current_user.id, start_date, end_date)


@router.get("/monthly", response_model=IncomeVsExpenseReport, summary="Resumo mensal")
def get_monthly_report(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna comparação mensal de receitas vs despesas."""
    return ReportService(db).get_monthly_summary(current_user.id)
