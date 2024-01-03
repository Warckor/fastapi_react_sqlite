from pydantic import BaseModel, Field


class TransactionBase(BaseModel):
    amount: float
    category: str
    date: str
    is_income: bool
    description: str


class TransactionModel(TransactionBase):
    id: int

    class Config:
        from_attributes = True
