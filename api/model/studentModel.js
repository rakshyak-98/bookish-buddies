const mongoose = require("mongoose");
const JWT = require("jsonwebtoken")

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
    password: {
      type: String,
      required: [true, "User password is required"],
    } 
},{
  timestamps:true
})


StudentSchema.methods = { 
  jwtToken() {
     return JWT.sign(
       {id: this._id, email: this.email },
       process.env.JWT_SECRET,
       {expiresIn:'24h'}
     )
  
 }}

module.exports = mongoose.model("Student", StudentSchema)