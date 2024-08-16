// galleryController 
const Image = require('../model/imageModel');

// Get gallery images
exports.getGalleryPage = async (req, res) => {

    try {
        const images = await Image.find();  // Ensure `Image` is the correct model
        // images = images.map(image => {
        //     image.src = image.src.replace(/\134\134/g,"/"); // Replace backslashes with forward slashes
        //     return image;
        // });
        console.log(images); // Debugging: Check the output to verify image paths
        // console.log(req.file.path);
        res.render('galleryPage', { images }); // Note: Ensure the view name matches the file name
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
