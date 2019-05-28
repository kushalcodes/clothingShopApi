const multer = require('multer');
var uploadedFileName = "";
// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadedItemImages/')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname;
        const fileExtension = filename.split('.').pop().toString();
        const fileNameWithoutExtension = filename.split('.')[0].toString();
        uploadedFileName = fileNameWithoutExtension + '-' + Date.now() +'.'+ fileExtension;
        if(fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'gif' && fileExtension !== 'jpeg') {
            cb('Only images allowed in itemImage',false)
        }else{
            cb(null, uploadedFileName);
        }
    }
})
const upload = multer({ storage: storage })

module.exports = {
    upload : upload,
    uploadedFileName : uploadedFileName
}