const express=require('express');

//import from controller
const{
   getAllUsers,updateUser,deleteUser,getUser

}=require('../controllers/accountController');


const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

// check if auth
router.use(protect)




//get all Users
router.get('/get',getAllUsers)
//get one user
router.get('/getone',getUser)
//update an User
router.patch("/update/:id",updateUser)
//delete a user
router.delete("/delete/:id",deleteUser)
module.exports=router  