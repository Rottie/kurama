const express = require('express')
const app = express()

// settting main page route
app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
