const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Teacher name is required"],
      minLength : [5, "Name must be at-least 5 char"],
      maxLength: [50, "Name must be less than 50 char"],
      trim: true,
    }, 
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: [true, "Already used Email"],
    },
    department: {
      type: mongoose.Types.ObjectId,
    },
    subject: {
      type: mongoose.Types.ObjectId,
    }
  },{
    timestamps:true
  })
  
  module.exports = mongoose.model('Teacher', TeacherSchema);