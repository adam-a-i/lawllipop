from langchain.llms import WatsonxAI
from dotenv import load_dotenv
import os

load_dotenv()

def get_watsonx():
    return WatsonxAI(
        api_key=os.getenv("WATSONX_API_KEY"),
        endpoint=os.getenv("WATSONX_ENDPOINT"),
        project_id=os.getenv("WATSONX_PROJECT_ID"),
        model_id="ibm/granite-13b-chat-v1",
        params={
            "decoding_method": "greedy",
            "max_new_tokens": 1024,
            "min_new_tokens": 0,
            "temperature": 0.7,
            "top_k": 50,
            "top_p": 0.9,
        }
    )

def get_legal_analysis_model():
    return WatsonxAI(
        api_key=os.getenv("WATSONX_API_KEY"),
        endpoint=os.getenv("WATSONX_ENDPOINT"),
        project_id=os.getenv("WATSONX_PROJECT_ID"),
        model_id="ibm/granite-13b-chat-v1",
        params={
            "temperature": 0.3,  # Lower for more precise analysis
            "top_p": 0.7,
            "max_new_tokens": 2048,  # Longer output for detailed analysis
        }
    ) 