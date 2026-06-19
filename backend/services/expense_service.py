from datetime import date
from typing import Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from backend.repositories.expense_repository import ExpenseRepository
from backend.schemas.expense import ExpenseCreate, ExpenseUpdate, ExpenseResponse


class ExpenseService:
    def __init__(self, db: Session) -> None:
        self.repo = ExpenseRepository(db)

    def create(self, data: ExpenseCreate, user_id: int) -> ExpenseResponse:
        expense = self.repo.create(
            description=data.description,
            category=data.category,
            amount=data.amount,
            date=data.date,
            user_id=user_id,
        )
        return ExpenseResponse.model_validate(expense)

    def list_all(
        self,
        user_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
        category: Optional[str] = None,
        description: Optional[str] = None,
    ) -> list[ExpenseResponse]:
        expenses = self.repo.get_all(
            user_id=user_id,
            start_date=start_date,
            end_date=end_date,
            category=category,
            description=description,
        )
        return [ExpenseResponse.model_validate(e) for e in expenses]

    def get_by_id(self, expense_id: int, user_id: int) -> ExpenseResponse:
        expense = self.repo.get_by_id(expense_id, user_id)
        if not expense:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Despesa não encontrada")
        return ExpenseResponse.model_validate(expense)

    def update(self, expense_id: int, data: ExpenseUpdate, user_id: int) -> ExpenseResponse:
        expense = self.repo.get_by_id(expense_id, user_id)
        if not expense:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Despesa não encontrada")
        updated = self.repo.update(expense, **data.model_dump(exclude_none=True))
        return ExpenseResponse.model_validate(updated)

    def delete(self, expense_id: int, user_id: int) -> dict:
        expense = self.repo.get_by_id(expense_id, user_id)
        if not expense:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Despesa não encontrada")
        self.repo.delete(expense)
        return {"message": "Despesa excluída com sucesso"}
