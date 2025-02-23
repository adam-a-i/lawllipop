import { useState } from 'react';
import { contractApi } from '../../api/contracts';

export function ContractGenerator() {
  const [formData, setFormData] = useState({
    party1: '',
    party2: '',
    description: '',
    type: '',
  });
  const [generatedContract, setGeneratedContract] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await contractApi.generate(formData);
      setGeneratedContract(result.contract);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contract-generator">
      <h2>Generate Contract</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Party 1</label>
          <input
            type="text"
            value={formData.party1}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              party1: e.target.value
            }))}
            required
          />
        </div>
        <div className="form-group">
          <label>Party 2</label>
          <input
            type="text"
            value={formData.party2}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              party2: e.target.value
            }))}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              description: e.target.value
            }))}
            required
          />
        </div>
        <div className="form-group">
          <label>Contract Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              type: e.target.value
            }))}
            required
          >
            <option value="">Select type...</option>
            <option value="employment">Employment Contract</option>
            <option value="service">Service Agreement</option>
            <option value="nda">Non-Disclosure Agreement</option>
            <option value="lease">Lease Agreement</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Contract'}
        </button>
      </form>

      {generatedContract && (
        <div className="generated-contract">
          <h3>Generated Contract</h3>
          <pre>{generatedContract}</pre>
        </div>
      )}
    </div>
  );
} 