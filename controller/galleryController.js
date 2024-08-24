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
// Get gallery images with filtering and pagination
const Image = require('../model/imageModel');
exports.getGalleryPage = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // صفحه فعلی
    const limit = 9; // تعداد تصاویر در هر صفحه
    const skip = (page - 1) * limit; // محاسبه موقعیت شروع
    const category = req.query.category || 'all'; // دریافت کتگوری از query params

    try {
        const query = category === 'all' ? {} : { category: category }; // فیلتر بر اساس کتگوری
        const totalImages = await Image.countDocuments(query); // تعداد کل تصاویر بر اساس فیلتر
        const images = await Image.find(query).skip(skip).limit(limit); // بارگذاری تصاویر با پجینیشن و فیلتر

        const totalPages = Math.ceil(totalImages / limit); // محاسبه تعداد صفحات
        const current = page; // صفحه فعلی

        // ارسال تصاویر و اطلاعات پجینیشن به ویو
        res.render('galleryPage', { images, current, totalPages, activeCategory: category });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
