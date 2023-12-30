from database import Base
from sqlalchemy import Column, Integer, String, Float, Boolean


class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    amount = Column(Float, nullable=False)
    category = Column(String, nullable=False)
    date = Column(String, nullable=False)
    is_income = Column(Boolean, nullable=False)
    description = Column(String, nullable=False)
