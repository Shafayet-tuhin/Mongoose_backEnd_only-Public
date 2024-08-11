const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },   
},
    {
        timestamps: true,
    }
) ;

const Product = mongoose.model('Fast Food' , productScheme); 

module.exports = Product;