// mainRoute.js
const express = require('express');

const {
    getMain,
    getAbout,
    getContact,
    getNews,
    postSubscribe,
    postSupport,
    getSitemap,
} = require('../controller/pagesController');
const { getGalleryPage } = require('../controller/galleryController'); // Ensure correct path and function


const router = express.Router();

router.get('/', getMain);
router.get('/about', getAbout);
router.get('/contact', getContact);
router.get('/news', getNews);
router.get('/gallery', getGalleryPage);
router.post('/subscribe', postSubscribe);
router.post('/support', postSupport);
// router.get('/sitemap2.xml', getSitemap);


module.exports = router;