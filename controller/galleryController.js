// // galleryController 

const Image = require('../model/imageModel');

exports.getGalleryPage = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // صفحه فعلی
    const limit = 12; // تعداد تصاویر در هر صفحه
    const skip = (page - 1) * limit; // محاسبه موقعیت شروع
    const category = req.query.category || 'all'; // دریافت کتگوری از query params

    try {
        const query = category === 'all' ? {} : { category: category }; // فیلتر بر اساس کتگوری
        const totalImages = await Image.countDocuments(query); // تعداد کل تصاویر بر اساس فیلتر
        
        // بارگذاری تصاویر با پجینیشن و فیلتر و ترتیب معکوس
        const images = await Image.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit); // بارگذاری 9 تصویر آخر

        const totalPages = Math.ceil(totalImages / limit); // محاسبه تعداد صفحات
        const current = page; // صفحه فعلی

        // ارسال تصاویر و اطلاعات پجینیشن به ویو
        res.render('galleryPage', { images, current, totalPages, activeCategory: category });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
