from langchain.prompts import PromptTemplate
from config.watsonx import get_legal_analysis_model
import json

class LawReference:
    def __init__(self):
        self.model = get_legal_analysis_model()
        self.law_handbook = self._load_law_handbook()

    def _load_law_handbook(self):
        # TODO: Load your law handbook content
        # This could be from a file, database, or API
        with open("path/to/your/lawbook.txt", "r") as f:
            return f.read()

    async def check_compliance(self, contract_analysis):
        prompt = PromptTemplate(
            template="""
            Compare the following contract analysis against the law handbook:
            
            Contract Analysis:
            {analysis}
            
            Law Handbook Reference:
            {handbook}
            
            Provide a detailed compliance analysis including:
            1. Overall compliance status
            2. Specific violations or issues
            3. Risk assessment
            4. Recommended improvements
            """,
            input_variables=["analysis", "handbook"]
        )

        response = await self.model.agenerate([
            prompt.format(
                analysis=json.dumps(contract_analysis, indent=2),
                handbook=self.law_handbook
            )
        ])

        return json.loads(response.generations[0].text)

    async def get_requirements(self, contract_type: str):
        prompt = PromptTemplate(
            template="""
            Based on the law handbook, what are the legal requirements for a {type} contract?
            
            Law Handbook:
            {handbook}
            
            Provide:
            1. Mandatory clauses
            2. Required disclosures
            3. Specific legal language
            4. Regulatory compliance requirements
            """,
            input_variables=["type", "handbook"]
        )

        response = await self.model.agenerate([
            prompt.format(type=contract_type, handbook=self.law_handbook)
        ])

        return json.loads(response.generations[0].text) 