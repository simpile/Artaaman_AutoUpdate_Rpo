// // // multer.js
// // const multer = require('multer');
// // const uuid = require('uuid').v4;

// // //? multer configuration
// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'public/images/NEWS')
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, `${uuid()}_${file.originalname}`);
// //     }
// // });
// // const upload = multer({storage});


// // multer.js
const multer = require('multer');


// پیکربندی Multer برای ذخیره تصاویر اخبار
const newsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/NEWS');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// پیکربندی Multer برای ذخیره تصاویر گالری
const galleryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/GALLERY'); // مسیر جدید برای گالری
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: newsStorage });
const galleryUpload = multer({ storage: galleryStorage });

module.exports = {
    upload,
    galleryUpload
};

