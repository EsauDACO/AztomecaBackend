const cloudinary = require('cloudinary').v2
const multer = require('multer')
const {CloudinaryStorage} = require ('multer-storage-cloudinary')

//Credenciales cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//Configuracion Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    param: (req, file) => {
        return {
            folder: "Aztomeca",
            allowedFormats: ['JPG', 'PNG', 'PNG', 'GIF']
        }
    }
})

const uploadCloudinary = multer({storage})

module.exports = uploadCloudinary