const express=require('express');

//import from controller
const{
    createProject,getProject , 
}=require('../controllers/projectController');


const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

// check if auth
router.use(protect)


//create new command
router.post('/create',createProject)
router.get('/get',getProject)


module.exports=router  