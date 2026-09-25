const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema({
    employeeId : {
        type : String,
        required : true,
        unique : true
    },
    employeeName : {
        type : String,
        required : true,
    },
    mobile : {
        type: String,
        required:true,
        unique:true
    },
    state:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"Active"
    }
},{
    timestamps:true
}
)
module.exports = mongoose.model("Employee", EmpSchema);