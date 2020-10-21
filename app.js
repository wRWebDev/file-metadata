// Configure .env
require('dotenv').config({path:__dirname+'/.env'})

// Initialise Express
const express = require('express')
const app = express()

// Setup static file directory
app.use(express.static(__dirname+'/public'))

// Import & use fileUpload package
const fileUpload = require('express-fileupload');
app.use(fileUpload())

// Import & use cors
var cors = require('cors')
app.use(cors({optionsSuccessStatus:200}))


// Route homepage
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

// Analyse file
app.post('/api/fileanalyse', (req,res)=>{
    const { name, mimetype, size } = req.files.upfile
    res.json({"name": name, "type": mimetype, "size": size})
})

// Serve site
var listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${listener.address().port}`)
})