from datetime import date
from typing import Optional
from sqlalchemy.orm import Session
from backend.repositories.income_repository import IncomeRepository
from backend.repositories.expense_repository import ExpenseRepository
from backend.schemas.report import CategoryReport, MonthlyReport, IncomeVsExpenseReport

MONTH_NAMES = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]


class ReportService:
    def __init__(self, db: Session) -> None:
        self.income_repo = IncomeRepository(db)
        self.expense_repo = ExpenseRepository(db)

    def get_expenses_by_category(
        self,
        user_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
    ) -> list[CategoryReport]:
        expenses = self.expense_repo.get_all(
            user_id=user_id, start_date=start_date, end_date=end_date
        )
        totals: dict[str, float] = {}
        for e in expenses:
            totals[e.category] = totals.get(e.category, 0.0) + e.amount

        grand_total = sum(totals.values()) or 1.0
        return [
            CategoryReport(
                category=cat,
                total=round(amount, 2),
                percentage=round((amount / grand_total) * 100, 1),
            )
            for cat, amount in sorted(totals.items(), key=lambda x: -x[1])
        ]

    def get_monthly_summary(self, user_id: int) -> IncomeVsExpenseReport:
        income_data = self.income_repo.get_monthly_totals(user_id)
        expense_data = self.expense_repo.get_monthly_totals(user_id)

        # Mescla receitas e despesas num mapa indexado por (ano, mês)
        monthly_map: dict[tuple, dict] = {}
        for item in income_data:
            key = (item["year"], item["month"])
            monthly_map.setdefault(key, {"income": 0.0, "expense": 0.0})
            monthly_map[key]["income"] = float(item["total"] or 0)
        for item in expense_data:
            key = (item["year"], item["month"])
            monthly_map.setdefault(key, {"income": 0.0, "expense": 0.0})
            monthly_map[key]["expense"] = float(item["total"] or 0)

        monthly = [
            MonthlyReport(
                month=MONTH_NAMES[month - 1],
                year=year,
                total_income=round(data["income"], 2),
                total_expense=round(data["expense"], 2),
                balance=round(data["income"] - data["expense"], 2),
            )
            for (year, month), data in sorted(monthly_map.items())
        ]

        return IncomeVsExpenseReport(
            monthly=monthly,
            total_income=round(sum(m.total_income for m in monthly), 2),
            total_expense=round(sum(m.total_expense for m in monthly), 2),
        )
