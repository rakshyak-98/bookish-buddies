const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Teacher name is required"],
    minLength : [5, "Name must be atleast 5 char"],
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
    type: String,
    required: [true, "Department must be there"],
    trim: true
  },
  subject: {
    type: String,
    required: [true, "Subject is mandatory"],
    trim: true
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Teacher', teacherSchema);