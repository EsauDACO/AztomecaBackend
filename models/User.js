const {Schema, model} = require ('mongoose');
const PLM = require ('passport-local-mongoose');

const userSchema = new Schema ({
    name:{
        type:String,
        required: [true, "Escribe tu(s) nombre(s)"]
    },
    surname:{
        type:String,
        required: [ true, "Escribe tu(s) apellido(s)"]
    },
    email:{
        type: String,
        required: [true,"Escribe un email valido"],
        unique: [true, "Este email ya esta en uso"]
    },
    gender: String,
    birthdate:Date,
    phoneNumber: {
        type: Number,
        unique: [true, "Este numero de celular ya esta en uso"]
    },
    country:String,
    state:String,
    role:{
        type:String,
        enum: ['ADMIN', 'USER', 'ARTISIAN'],
        default: 'USER'
    },
    googleID: String,
},{timestamps: true})

userSchema.plugin(PLM, {usernameField: "email"})

module.exports = model('User', userSchema)