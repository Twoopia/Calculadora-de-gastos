from sqlalchemy.orm import Session
from backend.repositories.income_repository import IncomeRepository
from backend.repositories.expense_repository import ExpenseRepository
from backend.schemas.dashboard import DashboardSummary


class DashboardService:
    def __init__(self, db: Session) -> None:
        self.income_repo = IncomeRepository(db)
        self.expense_repo = ExpenseRepository(db)

    def get_summary(self, user_id: int) -> DashboardSummary:
        total_income = self.income_repo.get_total(user_id)
        total_expense = self.expense_repo.get_total(user_id)
        income_count = self.income_repo.count(user_id)
        expense_count = self.expense_repo.count(user_id)
        return DashboardSummary(
            total_income=round(total_income, 2),
            total_expense=round(total_expense, 2),
            balance=round(total_income - total_expense, 2),
            income_count=income_count,
            expense_count=expense_count,
            total_records=income_count + expense_count,
        )
