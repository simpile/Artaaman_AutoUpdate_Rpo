const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: String,
    desc: String,
    label: String,
    img: String,
    alt:String,
    keywords:String,
    subj:String,
        createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    },
    slug: {
        type: String,
        unique: true // اطمینان از اینکه slug یکتا باشد
    }
});
// این hook برای تنظیم createdAt و updatedAt هنگام ایجاد و ویرایش مقاله است

newsSchema.pre('save', function(next) {
    if (this.isNew) {
        this.createdAt = Date.now();
    } else {
        this.updatedAt = Date.now();
    }
    next();
});
// این hook برای تنظیم updatedAt هنگام ویرایش مقاله است

newsSchema.pre('findOneAndUpdate', function(next) {
    this._update.updatedAt = Date.now();
    next();
});

const newsModel = mongoose.model('new', newsSchema);

module.exports = newsModel;
