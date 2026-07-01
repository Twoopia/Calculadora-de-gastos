import datetime
from typing import Optional
from pydantic import BaseModel, field_validator
from backend.models.expense import EXPENSE_CATEGORIES


class ExpenseCreate(BaseModel):
    description: str
    category: str
    amount: float
    date: datetime.date

    @field_validator("description")
    @classmethod
    def validate_description(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Descrição é obrigatória")
        return v

    @field_validator("category")
    @classmethod
    def validate_category(cls, v: str) -> str:
        if v not in EXPENSE_CATEGORIES:
            raise ValueError(f"Categoria inválida. Opções: {EXPENSE_CATEGORIES}")
        return v

    @field_validator("amount")
    @classmethod
    def validate_amount(cls, v: float) -> float:
        if v <= 0:
            raise ValueError("Valor deve ser maior que zero")
        return round(v, 2)


class ExpenseUpdate(BaseModel):
    description: Optional[str] = None
    category: Optional[str] = None
    amount: Optional[float] = None
    date: Optional[datetime.date] = None

    @field_validator("amount")
    @classmethod
    def validate_amount(cls, v: float) -> float:
        if v is not None and v <= 0:
            raise ValueError("Valor deve ser maior que zero")
        return round(v, 2) if v is not None else v

    @field_validator("date", mode="before")
    @classmethod
    def parse_date(cls, v):
        if v is None or v == "":
            return None
        if isinstance(v, str):
            try:
                return datetime.date.fromisoformat(v)
            except ValueError:
                raise ValueError("Data inválida. Use o formato AAAA-MM-DD.")
        return v


class ExpenseResponse(BaseModel):
    id: int
    description: str
    category: str
    amount: float
    date: datetime.date
    user_id: int

    model_config = {"from_attributes": True}
