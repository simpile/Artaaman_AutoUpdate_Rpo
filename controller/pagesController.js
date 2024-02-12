// pageController.js
const newsModel = require('../model/newsModel');
const Subscription = require('../model/subscriptionModel');
const {formatDate} = require('../utils/jalali');

//? loading aboutPage
exports.getAbout = (req, res) => res.render('aboutPage');

//? loading contactPage
exports.getContact = (req, res) => res.render('contactPage');

//? loading galleryPage
exports.getGallery = (req, res) => res.render('galleryPage');

//? loading newsletter
exports.getSubscribe = (req, res) => res.render('subscribe');


//? loading news page
exports.getNews = async (req, res) => {

    try {
        const news = await newsModel.find();
        res.render('newsPage', {
            news: news.reverse(),
            error: req.flash('err'),
            formatDate,
        })
    } catch (err) {
        req.flash('err', 'مشکلی در ارتباط با سرور وجود دارد');
        res.redirect('/');
    }
}

//? loading homePage
exports.getMain = async (req, res) => {
    const articles = await newsModel.find();
    const last10Articles = articles.reverse().slice(0, 10);
    res.render('mainPage', {
          last: last10Articles,
    });
    
}



exports.postSubscribe = async (req, res) => {
    const { name, email } = req.body;
  
    const existingSubscription = await Subscription.findOne({ email });
  
    if (existingSubscription) {
      return res.status(400).json({ message: 'این ایمیل قبلاً ثبت نام شده است.' });
    }
  
    const newSubscription = new Subscription({
      name,
      email
    });
  
    await newSubscription.save();
  
    res.json({ message: `با موفقیت عضو شدید! نام: ${name}, ایمیل: ${email}` });
  };
  
// controller/pagesController.js
const Support = require('../model/supportModel');

exports.postSupport = async (req, res) => {
  const { name, email, phone, method, message } = req.body;

  try {
    // ایجاد یک مورد Support جدید
    const newSupport = new Support({
      name,
      email,
      phone,
      method,
      message,
    });

    // ذخیره مورد Support در دیتابیس
    await newSupport.save();

    res.json({ message: 'پیام شما با موفقیت ارسال شد.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'خطایی در ذخیره اطلاعات رخ داده است.' });
  }
};
