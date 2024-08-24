// // galleryController 
// const Image = require('../model/imageModel');

// // Get gallery images
// exports.getGalleryPage = async (req, res) => {

//     try {
//         const images = await Image.find();  // Ensure `Image` is the correct model
//         // images = images.map(image => {
//         //     image.src = image.src.replace(/\134\134/g,"/"); // Replace backslashes with forward slashes
//         //     return image;
//         // });
//         console.log(images); // Debugging: Check the output to verify image paths
//         // console.log(req.file.path);
//         res.render('galleryPage', { images }); // Note: Ensure the view name matches the file name
        
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// };

// const Image = require('../model/imageModel');

// // Get gallery images with pagination
// exports.getGalleryPage = async (req, res) => {
//     try {
//         const page = parseInt(req.query.page) || 1;
//         const limit = 9; // تعداد آیتم‌ها در هر صفحه
//         const skip = (page - 1) * limit;

//         const images = await Image.find().skip(skip).limit(limit);
//         const totalImages = await Image.countDocuments();
//         const totalPages = Math.ceil(totalImages / limit);

//         res.render('galleryPage', { 
//             images, 
//             currentPage: page, 
//             totalPages 
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// };
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
