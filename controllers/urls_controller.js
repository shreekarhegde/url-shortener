const express = require('express');
const router = express.Router();

const { Url } = require('../models/url');


//get all urls
router.get('/', (req, res) => {
    Url.find().then((urls) => {
        res.send(urls);
    }).catch((err) => {
        res.send(err);
    });
});

//post url
router.post('/', (req, res) => {
    let body = req.body;
    let url = new Url(body);
    url.save().then((url) => {
        res.send({ url });
    }).catch((err) => {
        res.send(err);
    })
})

//delete url by id
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Url.findByIdAndRemove(id).then((url) => {
        if (url) {
            res.send(url);
        } else {
            res.send({
                notice: 'url not found'
            });
        }
    }).catch((err) => {
        res.send(err);
    });
});

//update by id
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Url.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true, runValidators: true }).then((url) => {
        if (!url) {
            res.send({
                notice: 'url not found'
            })
        }
        res.send({
            url,
            notice: 'Successfully updated url'
        });
    });
});



//get all the urls with particular tags name
router.get('/tags', (req, res) => {
    let tagName = req.query.names;
    console.log(tagName);
    tagName = tagName.split(',');
    console.log(tagName);
    Url.find({ tags: { "$in": tagName } })
        .then((url) => {
            res.send(url);
        }).catch((err) => {
            res.send(err);
        });
});

//get all the urls with particular tag name
router.get('/tags/:name', (req, res) => {
    let tagName = req.params.name;
    console.log(tagName);
    Url.find({ tags:tagName })
        .then((url) => {
            res.send(url);
        }).catch((err) => {
            res.send(err);
        });
});

//get urls by id
router.get('/:id', (req, res) => {
    let id = req.params.id;
    Url.findById(id).then((urls) => {
        res.send(urls);
    }).catch((err) => {
        res.send(err);
    });
});

router.use(function (req, res, next) {        //if no path matches, display the message
    res.status(404).send('the resource you are looking for does not exists');
});



module.exports = {
    urlsController: router
}

