var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://akashrameshvk:akash@cluster0.sv1at.mongodb.net/CCSIT?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log("db connected")
    })
    .catch((err) => {
    console.log(err)
})