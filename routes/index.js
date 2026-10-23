const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('COMP3810SEF G001 Kickoff OK')
})

router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

module.exports = router