const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        const currentDate = new Date();
        const formattedDate =currentDate.toISOString().substring(0,10);
        cb(null,formattedDate+'-'+file.originalname);
    }

})
module.exports=multer({storage : storage});