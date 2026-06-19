from pydantic import BaseModel


class DashboardSummary(BaseModel):
    total_income: float
    total_expense: float
    balance: float
    income_count: int
    expense_count: int
    total_records: int
