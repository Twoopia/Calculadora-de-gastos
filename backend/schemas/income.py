from datetime import date
from typing import Optional
from pydantic import BaseModel, field_validator


class IncomeCreate(BaseModel):
    description: str
    amount: float
    date: date

    @field_validator("description")
    @classmethod
    def validate_description(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Descrição é obrigatória")
        return v

    @field_validator("amount")
    @classmethod
    def validate_amount(cls, v: float) -> float:
        if v <= 0:
            raise ValueError("Valor deve ser maior que zero")
        return round(v, 2)


class IncomeUpdate(BaseModel):
    description: Optional[str] = None
    amount: Optional[float] = None
    date: Optional[date] = None


class IncomeResponse(BaseModel):
    id: int
    description: str
    amount: float
    date: date
    user_id: int

    model_config = {"from_attributes": True}
