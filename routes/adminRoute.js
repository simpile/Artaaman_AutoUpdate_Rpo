// adminRoute.js
const upload = require('../config/multer');
const express = require('express');
const Support = require('../model/supportModel'); // مدل مرتبط با پیام‌های ساپورت

const {
    getAdminLogin,
    handleAdminLogin,
    getAdminPanel,
    handleNews,
    handleLoadingNews,
    deleteArticle,

} = require('../controller/adminController')

const router = express.Router();

router.get('/adminlogin', getAdminLogin);
router.get('/adminpanel', getAdminPanel);
router.post('/adminlogin', handleAdminLogin);
router.post('/handlenews', upload.single('image'), handleNews);
router.post('/editarticle/:id', upload.single('image'), handleNews);
router.get('/news/:id', handleLoadingNews);
router.get('/deletearticle/:id', deleteArticle);

// روت نمایش پیام‌های ساپورت
router.get('/supportMessages', async (req, res) => {
    try {
      const supportMessages = await Support.find();
      res.render('supportMessages', { supportMessages });
    } catch (error) {
      console.error('Error fetching support messages:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;