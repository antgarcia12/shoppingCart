var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81Gta9u2%2B1L._SL1500_.jpg',
        title: 'Call of Duty: Cold War',
        description: 'Shooter',
        price: 20
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81fY6aXqrtL._SX342_.jpg',
        title: 'Mortal Kombat 11',
        description: 'Fighting game',
        price: 40
    }),
    new Product({
        imagePath: 'https://static.wikia.nocookie.net/twistedmetal/images/6/60/TwistedMetalPS3BoxArt.jpg/revision/latest/top-crop/width/360/height/450?cb=20111230172114',
        title: 'Twisted Metal',
        description: 'Fighting car game',
        price: 15
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/91JZdTYcjFL._SL1500_.jpg',
        title: 'Super Mario Odessey',
        description: 'Favorite Mario Game',
        price: 15
    }),
    new Product({
        imagePath: 'https://external-preview.redd.it/_wq5TFnymlf33K6o_hy4NnD1cDzIMB7Vg2SiXVo-dHw.jpg?auto=webp&s=447955d77286e4d4a421121b7fa813abf8bb3b13',
        title: 'Super Smash Bros Ultimate',
        description: 'FIGHT!',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}