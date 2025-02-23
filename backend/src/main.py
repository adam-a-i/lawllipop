from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.contract.analyzer import ContractAnalyzer
from services.contract.generator import ContractGenerator
from typing import Dict

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

analyzer = ContractAnalyzer()
generator = ContractGenerator()

class ContractText(BaseModel):
    text: str

class ContractRequest(BaseModel):
    party1: str
    party2: str
    description: str
    type: str

@app.post("/analyze")
async def analyze_contract(contract: ContractText):
    try:
        analysis = await analyzer.analyze_contract(contract.text)
        return analysis
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate")
async def generate_contract(request: ContractRequest):
    try:
        contract = await generator.generate_contract(request.dict())
        return {"contract": contract}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 