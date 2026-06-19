from datetime import date
from typing import Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from backend.repositories.income_repository import IncomeRepository
from backend.schemas.income import IncomeCreate, IncomeUpdate, IncomeResponse


class IncomeService:
    def __init__(self, db: Session) -> None:
        self.repo = IncomeRepository(db)

    def create(self, data: IncomeCreate, user_id: int) -> IncomeResponse:
        income = self.repo.create(
            description=data.description,
            amount=data.amount,
            date=data.date,
            user_id=user_id,
        )
        return IncomeResponse.model_validate(income)

    def list_all(
        self,
        user_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
        description: Optional[str] = None,
    ) -> list[IncomeResponse]:
        incomes = self.repo.get_all(
            user_id=user_id,
            start_date=start_date,
            end_date=end_date,
            description=description,
        )
        return [IncomeResponse.model_validate(i) for i in incomes]

    def get_by_id(self, income_id: int, user_id: int) -> IncomeResponse:
        income = self.repo.get_by_id(income_id, user_id)
        if not income:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Receita não encontrada")
        return IncomeResponse.model_validate(income)

    def update(self, income_id: int, data: IncomeUpdate, user_id: int) -> IncomeResponse:
        income = self.repo.get_by_id(income_id, user_id)
        if not income:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Receita não encontrada")
        updated = self.repo.update(income, **data.model_dump(exclude_none=True))
        return IncomeResponse.model_validate(updated)

    def delete(self, income_id: int, user_id: int) -> dict:
        income = self.repo.get_by_id(income_id, user_id)
        if not income:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Receita não encontrada")
        self.repo.delete(income)
        return {"message": "Receita excluída com sucesso"}
