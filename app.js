const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

// use the 'dist' folder for all routes
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('HEALTHY APP')
})

app.get('/version', (req, res) => {
  res.send('VERSION v0.0.6b')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
