// const express=require('express');

// //import from controller
// const{
//     createCommand,
// }=require('../controllers/commandController');


// const router = express.Router()
// const { protect } = require('../middleware/authMiddleware')

// // check if auth
// router.use(protect)

// // photos uploads
// const multer = require('multer');

// const storage = multer.memoryStorage();

// const upload = multer({
//     storage
//   });


// //create new command
// router.post('/create',upload.array('photos',25),createCommand)
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

// module.exports=router  