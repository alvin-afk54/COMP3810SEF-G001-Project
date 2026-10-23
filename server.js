const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('COMP3810SEF G001 Kickoff OK')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})