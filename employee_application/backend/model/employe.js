var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Sallary:Number
})
var employeemodel = mongoose.model("employee", schema)
module.exports=employeemodel