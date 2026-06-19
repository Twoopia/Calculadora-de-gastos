from datetime import date
from typing import Optional
from sqlalchemy import and_, extract, func
from sqlalchemy.orm import Session
from backend.models.expense import Expense


class ExpenseRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def get_all(
        self,
        user_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
        category: Optional[str] = None,
        description: Optional[str] = None,
    ) -> list[Expense]:
        q = self.db.query(Expense).filter(Expense.user_id == user_id)
        if start_date:
            q = q.filter(Expense.date >= start_date)
        if end_date:
            q = q.filter(Expense.date <= end_date)
        if category:
            q = q.filter(Expense.category == category)
        if description:
            q = q.filter(Expense.description.ilike(f"%{description}%"))
        return q.order_by(Expense.date.desc()).all()

    def get_by_id(self, expense_id: int, user_id: int) -> Expense | None:
        return self.db.query(Expense).filter(
            and_(Expense.id == expense_id, Expense.user_id == user_id)
        ).first()

    def create(
        self, description: str, category: str, amount: float, date: date, user_id: int
    ) -> Expense:
        expense = Expense(
            description=description, category=category,
            amount=amount, date=date, user_id=user_id,
        )
        self.db.add(expense)
        self.db.commit()
        self.db.refresh(expense)
        return expense

    def update(self, expense: Expense, **kwargs) -> Expense:
        for key, value in kwargs.items():
            if value is not None:
                setattr(expense, key, value)
        self.db.commit()
        self.db.refresh(expense)
        return expense

    def delete(self, expense: Expense) -> None:
        self.db.delete(expense)
        self.db.commit()

    def get_total(self, user_id: int) -> float:
        result = self.db.query(func.sum(Expense.amount)).filter(
            Expense.user_id == user_id
        ).scalar()
        return result or 0.0

    def count(self, user_id: int) -> int:
        return self.db.query(Expense).filter(Expense.user_id == user_id).count()

    def get_by_category(self, user_id: int) -> list[dict]:
        """Retorna total de despesas agrupado por categoria."""
        rows = self.db.query(
            Expense.category,
            func.sum(Expense.amount).label("total"),
        ).filter(Expense.user_id == user_id).group_by(Expense.category).all()
        return [{"category": r.category, "total": r.total} for r in rows]

    def get_monthly_totals(self, user_id: int) -> list[dict]:
        """Retorna total de despesas agrupado por ano/mês."""
        year_col  = extract("year",  Expense.date).label("year")
        month_col = extract("month", Expense.date).label("month")
        rows = self.db.query(
            year_col, month_col, func.sum(Expense.amount).label("total"),
        ).filter(
            Expense.user_id == user_id
        ).group_by(year_col, month_col).order_by(year_col, month_col).all()
        return [{"year": int(r.year), "month": int(r.month), "total": float(r.total or 0)} for r in rows]
