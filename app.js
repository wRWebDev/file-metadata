require('dotenv').config({path:__dirname+'/.env'})
const express = require('express')
const app = express()
app.use(express.static(__dirname+'/public'))
const fileUpload = require('express-fileupload');
app.use(fileUpload())

// Route homepage
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

// Analyse file
app.post('/api/fileanalyse', (req,res)=>{
    const { name, mimetype, size } = req.files.upfile
    res.json({"name": name, "type": mimetype, "size": size})
})

var listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${listener.address().port}`)
})

// example output: {"name":"myImage.png","type":"image/png","size":72341}