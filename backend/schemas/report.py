from typing import List
from pydantic import BaseModel


class CategoryReport(BaseModel):
    category: str
    total: float
    percentage: float


class MonthlyReport(BaseModel):
    month: str
    year: int
    total_income: float
    total_expense: float
    balance: float


class IncomeVsExpenseReport(BaseModel):
    monthly: List[MonthlyReport]
    total_income: float
    total_expense: float
