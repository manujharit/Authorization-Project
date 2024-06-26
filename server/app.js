const express = require("express")
const router = require('./src/routes/router')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at PORT: ${port} ...`)
})