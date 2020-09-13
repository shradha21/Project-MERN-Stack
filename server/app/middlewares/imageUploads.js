const multer=require('multer')

const storage = multer.diskStorage({
    
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
    filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

  const upload=multer({storage:storage})

  module.exports=upload




// const fileFilter = (req,file,cb) => {
//     if(file.mimetype === '.jpeg' || file.mimetype === '.jpg' || file.mimetype === '.png'){
//         cb(null,true)        
//     }else {
//         cb(new Error('Only .jpeg or .png files are accepted'), false)
//     }
// }


// const upload=multer({
//     storage:storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 5
    // },
    //fileFilter:fileFilter
//})

// const upload = multer({ storge: storage })

// module.exports = upload