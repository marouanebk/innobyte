const express=require('express');

//import from controller
const{
    createWorkSpace,
}=require('../controllers/workSpaceController');


const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

// check if auth
router.use(protect)


//create new command
router.post('/create',createWorkSpace)
// //get all commands
// router.get('/get',getCommands)
// //update an command
// router.patch("/update/:id",upload.array('photos',25),updateCommand)
// //update status
// router.patch("/status/update/:id",updateCommandStatus)
// // get command status stats
// router.get("/status/stats",getCommandStats)
// //get admins stats
// router.get('/pageadmin/stats',getAdminsStats)
// // add sous traitaince
// router.post('/sous-traitance/:id',addSousTraitance)
// //download data as excel
// router.get('/excel',downloadData)

module.exports=router  