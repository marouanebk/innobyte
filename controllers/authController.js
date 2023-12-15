const User = require('../models/UserModel')
const jwt=require('jsonwebtoken')

//jwd token generator
const createtoken=(_id)=>{
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'30d'})
}

// login user
const login = async (req, res) => {
  const {username, password,fcm_token} = req.body

  try {
    const user = await User.login(username, password ,fcm_token)
    const token = createtoken(user._id)

    res.status(200).json({status:'ok', token,user})
  } catch (error) {
    res.status(400).json({status:'error',error: error.message,user:false})
  }
}

//signup user
const signup = async (req, res) => {
    const { fullName,username, password,role,} = req.body
    try {
      const user = await User.signup(fullName,username, password,role)
  
      res.status(200).json({user})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  
  module.exports = { login,signup }