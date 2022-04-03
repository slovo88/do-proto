const path = require('path')

// express setup
const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = process.env.PORT || 3001

const buildPath = path.join(__dirname, 'client', 'build')

app.use(express.static(buildPath))

app.get('/test', (req, res) => {
  res.send({ resp: 'successful call' })
})

// fallback on react app's index.html for unknown endpoints
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))