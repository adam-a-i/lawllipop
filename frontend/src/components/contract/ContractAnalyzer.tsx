import { useState } from 'react';
import { contractApi } from '../../api/contracts';

export function ContractAnalyzer() {
  const [contractText, setContractText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const result = await contractApi.analyze(contractText);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contract-analyzer">
      <h2>Analyze Contract</h2>
      <textarea
        value={contractText}
        onChange={(e) => setContractText(e.target.value)}
        placeholder="Paste your contract text here..."
        rows={10}
        className="contract-input"
      />
      <button 
        onClick={handleAnalyze}
        disabled={loading || !contractText}
      >
        {loading ? 'Analyzing...' : 'Analyze Contract'}
      </button>

      {analysis && (
        <div className="analysis-results">
          <h3>Analysis Results</h3>
          <div className="summary">
            <p>Compliance: {analysis.summary.isCompliant ? '✅' : '❌'}</p>
            <p>Risk Level: {analysis.summary.riskLevel}</p>
          </div>
          {/* Display other analysis details */}
        </div>
      )}
    </div>
  );
} 