from langchain.prompts import PromptTemplate
from config.watsonx import get_watsonx
from services.lawbook.reference import LawReference
from typing import Dict, List
import json

class ContractGenerator:
    def __init__(self):
        self.model = get_watsonx()
        self.law_reference = LawReference()

    async def generate_contract(self, params: Dict):
        legal_requirements = await self.law_reference.get_requirements(params["type"])
        contract_draft = await self._generate_initial_draft(params, legal_requirements)
        validation = await self._validate_contract(contract_draft)
        
        if validation.get("isValid"):
            return contract_draft
        return await self._refine_contract(contract_draft, validation.get("issues", []))

    async def _generate_initial_draft(self, params: Dict, requirements: Dict):
        prompt = PromptTemplate(
            template="""
            Generate a professional and legally compliant contract with the following details:
            
            Party 1: {party1}
            Party 2: {party2}
            Purpose: {description}
            Type: {type}
            
            Legal Requirements to Include:
            {requirements}
            
            Generate a complete contract that is:
            1. Legally binding
            2. Clear and unambiguous
            3. Protective of both parties
            4. Compliant with all relevant laws
            5. Written in professional legal language
            """,
            input_variables=["party1", "party2", "description", "type", "requirements"]
        )

        response = await self.model.agenerate([
            prompt.format(
                **params,
                requirements=json.dumps(requirements, indent=2)
            )
        ])

        return response.generations[0].text

    async def _validate_contract(self, contract: str):
        # TODO: Implement contract validation against legal requirements
        return {"isValid": True}  # Placeholder

    async def _refine_contract(self, contract: str, issues: List):
        prompt = PromptTemplate(
            template="""
            Refine the following contract to address these legal issues:
            Issues: {issues}
            
            Contract:
            {contract}
            
            Provide an improved version that resolves all issues while maintaining the original intent.
            """,
            input_variables=["contract", "issues"]
        )

        response = await self.model.agenerate([
            prompt.format(
                contract=contract,
                issues=json.dumps(issues, indent=2)
            )
        ])

        return response.generations[0].text 