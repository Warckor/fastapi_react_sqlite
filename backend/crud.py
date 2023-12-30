from database import Session
from schemas import TransactionBase
from models import Transaction

from typing import List


def create_transaction(db: Session, transaction: TransactionBase) -> Transaction:
    db_transaction = Transaction(**transaction.model_dump())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction


def get_transactions(db: Session, skip: int = 0, limit: int = 100) -> List[Transaction]:
    return db.query(Transaction).offset(skip).limit(limit).all()


def delete_transaction(db: Session, id: int) -> None:
    db.query(Transaction).filter(Transaction.id == id).delete()
    db.commit()
    db.refresh()
