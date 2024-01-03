from fastapi import FastAPI, HTTPException, Depends, Request, Response, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from typing import Annotated, List
from sqlalchemy.orm import Session

from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine
from schemas import TransactionBase, TransactionModel
import models
import crud


app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    """
    Crea y retorna una nueva sesión de base de datos.

    Devuelve:
        Un generador que produce la sesión.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"errors": exc.errors()},
    )


@app.post("/api/v1/transactions/", tags=["Transactions"], response_model=TransactionModel, status_code=201)
def create_transaction(transaction: TransactionBase, db: db_dependency) -> TransactionModel:
    return crud.create_transaction(db, transaction)


@app.get("/api/v1/transactions/", tags=["Transactions"], response_model=List[TransactionModel], status_code=200)
async def get_transactions(db: db_dependency, skip: int = 0, limit: int = 100) -> List[TransactionModel]:
    transactions = crud.get_transactions(db, skip, limit)
    if not transactions:
        raise HTTPException(status_code=404, detail="Transactions not found")
    return transactions


@app.delete("/api/v1/transactions/{id}", tags=["Transactions"], status_code=status.HTTP_204_NO_CONTENT)
async def delete_transaction(id: int, db: db_dependency):
    try:
        deleted = crud.delete_transaction(db, id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Transaction not found")
    except:
        raise HTTPException(status_code=404, detail="Transaction not found")
