// adminRoute.js
// const galleryUpload = require('../config/multer');
const express = require('express');
const {upload, galleryUpload} = require('../config/multer');
const Support = require('../model/supportModel'); // مدل مرتبط با پیام‌های ساپورت

const {
    getAdminLogin,
    handleAdminLogin,
    getAdminPanel,
    handleNews,
    handleLoadingNews,
    deleteArticle,
    handleImageUpload,
    deleteImage,
    updateImage,
    deleteSupportMsg,
    deleteSubscribers



} = require('../controller/adminController')


const router = express.Router();

router.get('/adminlogin', getAdminLogin);
router.get('/adminpanel', getAdminPanel);
router.post('/adminlogin', handleAdminLogin);
router.post('/handlenews', upload.single('image'), handleNews);
router.post('/editarticle/:id', upload.single('image'), handleNews);
router.get('/news/:id', handleLoadingNews);
router.get('/deletearticle/:id', deleteArticle);
router.post('/handleimageupload', galleryUpload.single('image'), handleImageUpload);
router.get('/deleteimage/:id', deleteImage);
router.post('/updateimage', galleryUpload.single('image'), updateImage); // اضافه کردن مسیر جدید
router.post('/deleteSupportMsg/:id', deleteSupportMsg);
router.post('/deleteSubscribers/:id', deleteSubscribers);





module.exports = router;