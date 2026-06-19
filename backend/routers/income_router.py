from datetime import date
from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.schemas.income import IncomeCreate, IncomeUpdate, IncomeResponse
from backend.services.income_service import IncomeService
from backend.dependencies import get_current_user
from backend.models.user import User

router = APIRouter(prefix="/incomes", tags=["Receitas"])


@router.get("/", response_model=list[IncomeResponse], summary="Listar receitas")
def list_incomes(
    start_date: Optional[date] = Query(None, description="Filtro: data inicial"),
    end_date: Optional[date] = Query(None, description="Filtro: data final"),
    description: Optional[str] = Query(None, description="Filtro: descrição"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Lista todas as receitas do usuário autenticado com filtros opcionais."""
    return IncomeService(db).list_all(current_user.id, start_date, end_date, description)


@router.post("/", response_model=IncomeResponse, status_code=201, summary="Cadastrar receita")
def create_income(
    data: IncomeCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Cadastra uma nova receita."""
    return IncomeService(db).create(data, current_user.id)


@router.get("/{income_id}", response_model=IncomeResponse, summary="Buscar receita por ID")
def get_income(
    income_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna uma receita específica pelo ID."""
    return IncomeService(db).get_by_id(income_id, current_user.id)


@router.put("/{income_id}", response_model=IncomeResponse, summary="Atualizar receita")
def update_income(
    income_id: int,
    data: IncomeUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Atualiza os dados de uma receita existente."""
    return IncomeService(db).update(income_id, data, current_user.id)


@router.delete("/{income_id}", summary="Excluir receita")
def delete_income(
    income_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Remove uma receita permanentemente."""
    return IncomeService(db).delete(income_id, current_user.id)
