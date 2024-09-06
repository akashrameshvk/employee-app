const express = require('express')
require("./connection")
var emp = require("./model/employe")
var cors = require("cors")

//initialize
const app = new express()

//mid
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("message from the server")
})
app.get('/trial', (req, res) => {
    res.send('this is a trial message')
})
app.listen(3004, () => {
    console.log('port is ready');
})
app.post("/add", async (req, res) => {
    try {
        await emp(req.body).save();
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
        
    }
})
    app.get("/view",async (req, res) => {
        try {
             var show=await emp.find()
            res.send(show)
        } catch (error) {
            console.log(error)
            
        }
    })
app.delete("/remove/:id", async (req, res) => {
        try {
            await emp.findByIdAndDelete(req.params.id)
            res.send({message:"data deleted"})
        } catch (error) {
            console.log(error)
            
        }
})
app.put("/update/:id", async (req, res) => {
    try {
       var data= await emp.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log(error)

    }
})