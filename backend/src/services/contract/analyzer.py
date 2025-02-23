from langchain.prompts import PromptTemplate
from config.watsonx import get_legal_analysis_model
from services.lawbook.reference import LawReference
import json

class ContractAnalyzer:
    def __init__(self):
        self.model = get_legal_analysis_model()
        self.law_reference = LawReference()

    async def analyze_contract(self, contract_text: str):
        structure_analysis = await self._analyze_structure(contract_text)
        legal_compliance = await self.law_reference.check_compliance(structure_analysis)
        return self._generate_analysis_report(structure_analysis, legal_compliance)

    async def _analyze_structure(self, text: str):
        prompt = PromptTemplate(
            template="""
            Analyze the following contract and extract key components:
            - Parties involved
            - Main obligations
            - Terms and conditions
            - Termination clauses
            - Governing law
            
            Contract:
            {text}
            
            Provide a structured analysis focusing on legal validity and completeness.
            """,
            input_variables=["text"]
        )

        response = await self.model.agenerate([prompt.format(text=text)])
        return json.loads(response.generations[0].text)

    def _generate_analysis_report(self, structure, compliance):
        return {
            "summary": {
                "isCompliant": compliance.get("isCompliant"),
                "riskLevel": compliance.get("riskLevel"),
                "majorIssues": compliance.get("majorIssues"),
            },
            "detailedAnalysis": {
                "structure": structure,
                "legalCompliance": compliance.get("details"),
                "recommendations": compliance.get("recommendations"),
            },
            "suggestedImprovements": compliance.get("improvements"),
        } 