// // galleryController 

const Image = require('../model/imageModel');

// Get gallery images with pagination
exports.getGalleryPage = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 9; // تعداد آیتم‌ها در هر صفحه
        const skip = (page - 1) * limit;
        const category = req.query.category || 'all';

        let filter = {};
        if (category !== 'all') {
            filter.category = category;
        }

        const images = await Image.find(filter).skip(skip).limit(limit);
        const totalImages = await Image.countDocuments(filter);
        const totalPages = Math.ceil(totalImages / limit);

        res.render('galleryPage', { 
            images, 
            currentPage: page, 
            totalPages,
            activeCategory: category 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
