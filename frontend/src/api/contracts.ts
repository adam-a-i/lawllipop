interface ContractAnalysisRequest {
  text: string;
}

interface ContractGenerationRequest {
  party1: string;
  party2: string;
  description: string;
  type: string;
}

export const contractApi = {
  analyze: async (text: string) => {
    const response = await fetch('http://localhost:8000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    return response.json();
  },

  generate: async (params: ContractGenerationRequest) => {
    const response = await fetch('http://localhost:8000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    return response.json();
  },
}; 