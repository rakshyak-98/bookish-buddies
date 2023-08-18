const mongoose = require('mongoose');

const JWT = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema ({
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
    role: {
    type: String,
       enum: ["STUDENT",  "TEACHER"],
       default: 'STUDENT'
     },
     isApproved : {
      type: Boolean,
      default: false
     },
    password: {
      type:String,
      select: false
    },
    
},{
  timestamps:true
})

studentSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    return next()
  }

  this.password = await bcrypt.hash(this.password, 10);
  return next();
})

studentSchema.methods = { 
 jwtToken() {
    return JWT.sign(
      {id: this._id, email: this.email },
      process.env.JWT_SECRET,
      {expiresIn:'24h'}
    )
 
}}


module.exports = mongoose.model('Student', studentSchema);
