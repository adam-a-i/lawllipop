import express from 'express'
import { ContractAnalyzer } from '../services/contract/analyzer'

const router = express.Router()
const analyzer = new ContractAnalyzer()

router.post('/analyze', async (req, res) => {
  try {
    const { contractText } = req.body
    const analysis = await analyzer.analyzeContract(contractText)
    res.json(analysis)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router 