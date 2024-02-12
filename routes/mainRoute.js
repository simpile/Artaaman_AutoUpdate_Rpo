// mainRoute.js
const express = require('express');

const {
    getMain,
    getAbout,
    getContact,
    getNews,
    getGallery,
    postSubscribe,
    postSupport,
} = require('../controller/pagesController');

const router = express.Router();

router.get('/', getMain);
router.get('/about', getAbout);
router.get('/contact', getContact);
router.get('/news', getNews);
router.get('/gallery', getGallery);
router.post('/subscribe', postSubscribe);
router.post('/support', postSupport);

module.exports = router;