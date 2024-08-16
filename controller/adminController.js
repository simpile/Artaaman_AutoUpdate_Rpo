// adminController.js 
const newsModel = require('../model/newsModel');
const supportModel = require('../model/supportModel');
const Subscription = require('../model/subscriptionModel');
const Image = require('../model/imageModel');
const passport = require('passport');
const {formatDate} = require('../utils/jalali');

// gallery image

// کنترلر برای بارگذاری تصویر
exports.handleImageUpload = async (req, res) => {
    try {
        const { title, description, category, imageUrl } = req.body;
        let src;

        if (req.file) {
            // اگر فایل بارگذاری شده باشد
            src = req.file.path.replace(/\\/g, "/").replace('public', '');
        } else if (imageUrl) {
            // اگر URL تصویر ارائه شده باشد
            src = imageUrl;
        } else {
            throw new Error('تصویر یا URL تصویر باید ارائه شود');
        }

        const newImage = new Image({ title, description, src, category });
        await newImage.save();

        res.redirect('/adminpanel'); // یا مسیر مناسب برای نمایش موفقیت
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};



// حذف تصویر
exports.deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        // پیدا کردن و حذف تصویر
        await Image.findByIdAndDelete(id);
        req.flash('success', 'تصویر با موفقیت حذف شد');
        res.redirect('/adminpanel');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Update image
exports.updateImage = async (req, res) => {
    try {
        const { id, title, description, category } = req.body;
        const image = await Image.findById(id);

        // Check if image exists
        if (!image) {
            req.flash('error', 'تصویر یافت نشد');
            return res.redirect('/adminpanel');
        }

        // Update image fields
        image.title = title;
        image.description = description;
        image.category = category;

        // Update image file if a new file is uploaded
        if (req.file) {
            image.src = req.file.path.replace(/\\/g, "/").replace('public', '');
        }

        await image.save();
        req.flash('success', 'تصویر با موفقیت به‌روزرسانی شد');
        res.redirect('/adminpanel');
    } catch (err) {
        console.error(err);
        req.flash('error', 'خطا در به‌روزرسانی تصویر');
        res.redirect('/adminpanel');
    }
};
//? loading admin login page

exports.getAdminLogin = (req, res) => {
    res.render('adminLogin', {
        error: req.flash('loginErr'),
    });
}

//? loading admin panel page

exports.getAdminPanel = async (req, res) => {
    const news = await newsModel.find();
    const supportMessages = await supportModel.find(); // خواندن پیام‌های ساپورت
    const images = await Image.find(); // تصاویر گالری
    const subscribers = await Subscription.find(); //ایمیلهای عضویت در خبرنامه


    if(req.isAuthenticated()) return res.render('adminPanel', {
        news: news.reverse(),
        error: req.flash('error'),
        success: req.flash('success'),
        supportMessages: supportMessages, // ارسال پیام‌های ساپورت به صفحه
        images: images, //  ارسال تصاویر به صفحه گالری
        Subscription:subscribers// ایمیلهای بخش خبرنامه


    });
    return res.redirect('/adminlogin');
}

//? handling admin login

exports.handleAdminLogin = (req, res) => {

    passport.authenticate('local', {
        failureRedirect: '/adminlogin',
        successRedirect: '/adminpanel',
        failureFlash: req.flash('loginErr', 'نام کاربری یا پسورد اشتباه میباشد'),
    })(req, res);
}

//? sending news 

exports.handleNews = async (req, res) => {
    const {title, desc, alt, keywords, subj, label} = req.body;

    if(!title || !desc) {
        req.flash('error', 'عنوان و توضیحات مقاله را وارد کنید')
        // return res.redirect('/adminpanel');
    }
    if(!label) {
        req.flash('error', 'لطفا دسته بندی مقاله را قرار دهید');
        // return res.redirect('/adminpanel');
    }

    const createdOrChanged = {
        title, 
        desc, 
        alt,
        keywords,
         subj,
        label: label.trim(),
        
    }

    try {
        console.log(req.url)
        if(req.url == '/handlenews') {
            await newsModel.create({...createdOrChanged, 
                img: req.file == undefined ? '/images/logo-grey.svg' 
                : req.file.path.replace(/\134/g,"/").slice(6)});
            req.flash('success', 'مقاله با موفقیت افزوده شد');
        }
        else {
            await newsModel.findOneAndUpdate({_id:req.params.id}, {...createdOrChanged, 
            img: req.file == undefined ? this.img 
            : req.file.path.replace(/\134/g,"/").slice(6)});
            req.flash('success', 'مقاله با موفقیت تغییر یافت');
        }
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی در برقراری ارتباط با سرور وجود دارد');
        res.redirect('/adminpanel');
    }
}



exports.handleLoadingNews = async (req, res) => {
    try {
      const article = await newsModel.findOne({ _id: req.params.id });
      const relatedLabels = article.label.split(/\s*,\s*/);
      const regexLabels = relatedLabels.map(label => new RegExp(label, 'i'));
      const related = await newsModel.find({ label: { $in: regexLabels }, _id: { $ne: article._id } });
      res.render('singleNewsPage', { article, formatDate, related: related.reverse() });
    } catch (err) {
      console.log(err);
    }
  }
//? delete article

exports.deleteArticle = async (req, res) => {
    try {
        await newsModel.deleteOne({_id: req.params.id});
        req.flash('success', 'مقاله با موفقیت حذف شد');
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی از سمت سرور وجود دارد');
        res.redirect('/adminpanel');
    }
}

// delete support msge 
// حذف پیام ساپورت
exports.deleteSupportMsg = async (req, res) => {
    try {
        await supportModel.deleteOne({_id: req.params.id});
        req.flash('success', 'پیام با موفقیت حذف شد');
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی از سمت سرور وجود دارد');
        res.redirect('/adminpanel');
    }
};
//  deleteSubscribers  
// حذف ایمیلهای عضویت در خبرنامه
exports.deleteSubscribers = async (req, res) => {
    try {
        await Subscription.deleteOne({_id: req.params.id});
        req.flash('success', 'پیام با موفقیت حذف شد');
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی از سمت سرور وجود دارد');
        res.redirect('/adminpanel');
    }
};
