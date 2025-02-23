from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.contract.generator import ContractGenerator

router = APIRouter()
generator = ContractGenerator()

class ContractRequest(BaseModel):
    party1: str
    party2: str
    description: str
    type: str

@router.post("/generate")
async def generate_contract(request: ContractRequest):
    try:
        contract = await generator.generate_contract(request.dict())
        return {"contract": contract}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 