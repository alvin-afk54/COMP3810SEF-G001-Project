const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('Login page (placeholder)')
})

router.post('/login', (req, res) => {
  req.session.user = { id: 'demo', name: 'G001' }
  res.redirect('/')
})

router.get('/logout', (req, res) => {
  req.session = null
  res.redirect('/')
})

module.exports = router