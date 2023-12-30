from pydantic import BaseModel


class TransactionBase(BaseModel):
    amount: float | int
    category: str
    date: str
    is_income: bool
    description: str


class TransactionModel(TransactionBase):
    id: int

    class Config:
        from_attributes = True
