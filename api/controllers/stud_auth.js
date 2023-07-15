const studentModel = require("../model/student.model");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');


const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  

  try {
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Every field is mandatory",
      });
    }

    var validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid emailID",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirmPassword does not match",
      });
    }

    const studentInfo = studentModel(req.body);
    const result = await studentInfo.save();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists",
      });
    }

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


const signin = async (req, res) => {
  const{email, password} = req.body;
  
  if(!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required"

    })
  }

  try {
    const student = await studentModel.findOne({
      email
    }).select('+password');

    

    if(!student || !await bcrypt.compare(password,student.password)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
      })
    }

    
     
     const token = student.jwtToken();
     student.password = undefined;
     
    const cookieOptions = {
      maxAge: 24*60*60*1000,  //24hr
      httpOnly: true
    };

    res.cookie("token", token , cookieOptions);
    res.status(200).json({
      success: true,
      data: student
    })



  } catch (error) {
    res.status(404).json({
      success:false,
      message: error.message
    })
  }


}


const getStudent = async (req, res) => {
  const studentId = req.student.id;
  

  try {
    const student = await studentModel.findById(studentId);
    return res.status(200).json({
      success:true,
      data: student
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const logout = (req, res) => {
 try {
  const cookieOptions = {
    expires: new Date(),
    httpOnly: true
  }
  res.cookie("token", null, cookieOptions);
  res.status(200).json({
    success:true,
    message: "Logged out  successfully"
  })
 } catch (error) {
  return res.status(400).json({
    success: false,
    message: error.message
  })
 }
}


module.exports = {signup, signin, getStudent, logout};
