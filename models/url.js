const mongoose = require('mongoose');
const sh = require("shorthash");


const Schema = mongoose.Schema;

const urlSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    originalURL: {
        type: String,
        required: true,
        minlength: 10
    },
    tags: {
        type: [String],
        required: true,
        minlength: 1
    },
    hashedUrl: {
        type: String
    },
    createdAt: {
        type: Date
    },
    clicks: [
        {
            clickedDateAndTime: {
                type: Date, 
                default: Date.now 
            },
            ipAddress: {
                type: String 
            }, 
            browserName: {
                type: String 
            },
            osType: {
                type: String
            },
            deviceType: {
                type: String
            }
        }
    ]
});




urlSchema.pre('save', function (next) {
    let url = this;
    url.hashedUrl = sh.unique(url.originalURL);
    url.createdAt = Date.now();
    next();
});

const Url = mongoose.model('Url', urlSchema);


module.exports = {
    Url
};

//create new url
// let url = new Url({
//     title: "How to be become a full stack developer", originalURL: "https://dctacademy.com/2018/05/become-full-stack-javascript-developer/", tags: ["javascript", "mern", "full stack developer"]
// });

// url.save().then((url) => {
//     console.log(url);
// }).catch((err) => {
//     console.log(err);
// });
