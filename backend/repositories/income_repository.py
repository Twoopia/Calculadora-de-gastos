from datetime import date
from typing import Optional
from sqlalchemy import and_, extract, func
from sqlalchemy.orm import Session
from backend.models.income import Income


class IncomeRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def get_all(
        self,
        user_id: int,
        start_date: Optional[date] = None,
        end_date: Optional[date] = None,
        description: Optional[str] = None,
    ) -> list[Income]:
        q = self.db.query(Income).filter(Income.user_id == user_id)
        if start_date:
            q = q.filter(Income.date >= start_date)
        if end_date:
            q = q.filter(Income.date <= end_date)
        if description:
            q = q.filter(Income.description.ilike(f"%{description}%"))
        return q.order_by(Income.date.desc()).all()

    def get_by_id(self, income_id: int, user_id: int) -> Income | None:
        return self.db.query(Income).filter(
            and_(Income.id == income_id, Income.user_id == user_id)
        ).first()

    def create(self, description: str, amount: float, date: date, user_id: int) -> Income:
        income = Income(description=description, amount=amount, date=date, user_id=user_id)
        self.db.add(income)
        self.db.commit()
        self.db.refresh(income)
        return income

    def update(self, income: Income, **kwargs) -> Income:
        for key, value in kwargs.items():
            if value is not None:
                setattr(income, key, value)
        self.db.commit()
        self.db.refresh(income)
        return income

    def delete(self, income: Income) -> None:
        self.db.delete(income)
        self.db.commit()

    def get_total(self, user_id: int) -> float:
        result = self.db.query(func.sum(Income.amount)).filter(
            Income.user_id == user_id
        ).scalar()
        return result or 0.0

    def count(self, user_id: int) -> int:
        return self.db.query(Income).filter(Income.user_id == user_id).count()

    def get_monthly_totals(self, user_id: int) -> list[dict]:
        """Retorna total de receitas agrupado por ano/mês."""
        year_col  = extract("year",  Income.date).label("year")
        month_col = extract("month", Income.date).label("month")
        rows = self.db.query(
            year_col, month_col, func.sum(Income.amount).label("total"),
        ).filter(
            Income.user_id == user_id
        ).group_by(year_col, month_col).order_by(year_col, month_col).all()
        return [{"year": int(r.year), "month": int(r.month), "total": float(r.total or 0)} for r in rows]
