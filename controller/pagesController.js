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

//? loading sitemap

const xmlbuilder = require('xmlbuilder');
const News = require('../model/newsModel'); // فرض می‌کنیم مدل News در فایل newsModel.js تعریف شده است
const Image = require('../model/imageModel');

// exports.getSitemap = async (req, res) => {
//     try {
//         const xml = xmlbuilder.create('urlset', { 
//             version: '1.0', 
//             encoding: 'UTF-8'
//         })
//         .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
//         .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
//         .att('xmlns:image', 'http://www.google.com/schemas/sitemap-images/1.1')
//         .att('xmlns:news', 'http://www.google.com/schemas/sitemap-news/0.9')
//         .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

//         const staticPages = [
//             { loc: 'https://artaaman.com/', lastmod: '2024-02-23T12:02:28+00:00', priority: '1.0' },
//             { loc: 'https://shop.artaaman.com', lastmod: '2024-02-23T12:02:28+00:00', priority: '1.0' },
//             { loc: 'https://artaaman.com/gallery', lastmod: '2024-02-23T12:02:28+00:00', priority: '8.0' },
//             { loc: 'https://artaaman.com/about', lastmod: '2024-02-23T12:02:28+00:00', priority: '0.8' },
//             { loc: 'https://artaaman.com/contact', lastmod: '2024-02-23T12:02:28+00:00', priority: '0.8' },
//             { loc: 'https://artaaman.com/news', lastmod: '2024-02-23T12:02:28+00:00', priority: '0.8' }
//         ];

//         staticPages.forEach(page => {
//             const urlElement = xml.ele('url');
//             urlElement.ele('loc', page.loc);
//             urlElement.ele('lastmod', page.lastmod);
//             urlElement.ele('priority', page.priority);
//         });

//         const news = await News.find({}, 'title id createdAt keywords img');

//         if (news.length === 0) {
//             console.error('No news found');
//             return res.status(404).send('No news found');
//         }

//         news.forEach(item => {
//             const url = `https://artaaman.com/news/${item.id}`;

//             if (item && url && item.createdAt) {
//                 const newsUrlElement = xml.ele('url');
//                 newsUrlElement.ele('loc', url);
//                 newsUrlElement.ele('priority', '1.0');

//                 const newsElement = newsUrlElement.ele('news:news');
//                 const publicationElement = newsElement.ele('news:publication');
                
//                 publicationElement.ele('news:name', 'Artaaman');
//                 publicationElement.ele('news:language', 'fa');
                
//                 newsElement.ele('news:publication_date', item.createdAt.toISOString());
//                 newsElement.ele('news:title', item.title);
//                 newsElement.ele('news:keywords', item.keywords);
//                 // newsElement.ele('news:image_link', "https://artaaman.com"+item.img);
//                 const imageElement = newsUrlElement.ele('image:image');
//                 imageElement.ele('image:loc', "https://artaaman.com" + item.img);
//             } else {
//                 console.error('Invalid news item:', item._id, 'title:', item.title, 'createdAt:', item.createdAt);
//             }
//         });
        
    
//         // بارگذاری تصاویر از مدل Image
//         const images = await Image.find({}, 'title description src'); // بارگذاری تصاویر

//         // اضافه کردن تگ‌های تصاویر به خروجی
//         images.forEach(image => {
//             const imageUrlElement = xml.ele('url');
//             imageUrlElement.ele('loc', "https://artaaman.com"+image.src); // آدرس تصویر
//             imageUrlElement.ele('priority', '0.8');

//             const imageElement = imageUrlElement.ele('image:image');
//             imageElement.ele('image:loc', "https://artaaman.com"+image.src); // آدرس تصویر
//             imageElement.ele('image:title', image.title); // عنوان تصویر
//             imageElement.ele('image:caption', image.description); // توضیحات تصویر
//         });

//         const xmlString = xml.end({ pretty: true });
//         res.header('Content-Type', 'text/xml');
//         res.send(xmlString);
//     } catch (error) {
//         console.error('Error generating Sitemap:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };
