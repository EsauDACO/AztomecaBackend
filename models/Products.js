const {Schema, model} = require ('mongoose');

const Products = new Schema ({
    productName: {
        type: String,
        required: [true,"Debes de colocar un nombre al producto"]
    },
    price: {
        type: Number,
        min: 0
    },
    description: {
        type: String,
        required: [true, "Escribe una descripcion para tu producto"],
        max: 300
    },
    category: {
        type:String,
        default: "Juhue",
        enum: ['Juhue', 'Yutsil','Aguamielera','Kofi Bar', 'Otro']
    },
    img: {
        type:String,
        default: "https://res.cloudinary.com/dxabmmloo/image/upload/v1629858341/AzAltaColor_fbfsue.jpg"
    },
},{timestamps: true});

module.exports = model('Products', Products)