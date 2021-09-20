const {Schema, model} = require ('mongoose');

const Products = new Schema ({
    productName: {
        type: String,
        required: [true,"Debes de colocar un nombre al producto"]
    },
    description: {
        type: String,
        required: [true, "Escribe una descripcion para tu producto"],
        max: 300
    },
    price: {
        type: Number,
        min: 0
    },
    brand: {
        type:String,
        default: "Otro",
        enum: ['Juhue', 'Yutsil','Aguamielera','Kofi Bar', 'Otro']
    },
    kind:{
        type:String,
        default: 'Otro',
        enum: ['Alcoholes', 'Textiles', 'Gourmet', 'Otro'],
    },
    img: {
        type:String,
        default: "https://res.cloudinary.com/dxabmmloo/image/upload/v1629858341/AzAltaColor_fbfsue.jpg"
    },
    doesitnew: {
        type: Boolean,
        default: true
    }
},{timestamps: true});

module.exports = model('Products', Products)