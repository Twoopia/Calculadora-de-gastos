from datetime import date
from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from backend.database.connection import get_db
from backend.schemas.expense import ExpenseCreate, ExpenseUpdate, ExpenseResponse
from backend.services.expense_service import ExpenseService
from backend.dependencies import get_current_user
from backend.models.user import User
from backend.models.expense import EXPENSE_CATEGORIES

router = APIRouter(prefix="/expenses", tags=["Despesas"])


@router.get("/categories", response_model=list[str], summary="Listar categorias")
def get_categories():
    """Retorna as categorias de despesas disponíveis."""
    return EXPENSE_CATEGORIES


@router.get("/", response_model=list[ExpenseResponse], summary="Listar despesas")
def list_expenses(
    start_date: Optional[date] = Query(None, description="Filtro: data inicial"),
    end_date: Optional[date] = Query(None, description="Filtro: data final"),
    category: Optional[str] = Query(None, description="Filtro: categoria"),
    description: Optional[str] = Query(None, description="Filtro: descrição"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Lista todas as despesas do usuário com filtros opcionais."""
    return ExpenseService(db).list_all(
        current_user.id, start_date, end_date, category, description
    )


@router.post("/", response_model=ExpenseResponse, status_code=201, summary="Cadastrar despesa")
def create_expense(
    data: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Cadastra uma nova despesa."""
    return ExpenseService(db).create(data, current_user.id)


@router.get("/{expense_id}", response_model=ExpenseResponse, summary="Buscar despesa por ID")
def get_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Retorna uma despesa específica pelo ID."""
    return ExpenseService(db).get_by_id(expense_id, current_user.id)


@router.put("/{expense_id}", response_model=ExpenseResponse, summary="Atualizar despesa")
def update_expense(
    expense_id: int,
    data: ExpenseUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Atualiza os dados de uma despesa existente."""
    return ExpenseService(db).update(expense_id, data, current_user.id)


@router.delete("/{expense_id}", summary="Excluir despesa")
def delete_expense(
    expense_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Remove uma despesa permanentemente."""
    return ExpenseService(db).delete(expense_id, current_user.id)
