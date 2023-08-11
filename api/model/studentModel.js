const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema ({
    name:{
      type: String,
      required: [true, "User name is required"],
      minLength : [5, "Name must be atleast 5 char"],
      maxLength: [50, "Name must be less than 50 char"],
      trim: true
    }, 
    email: {
      type: String,
      required: [true, "User email is required"],
      lowercase: true,
      unique: [true, "Already used Email"],
    },    
},{
  timestamps:true
})

exports.module = mongoose.model("Student", StudentSchema)