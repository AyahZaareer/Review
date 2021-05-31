const { db } = require('../models/dbModel.model');
const dbModel = require('../models/dbModel.model');

const creatFav = async (req, res) => {
    const { title, thumbnail, description, artist_title } = req.body;
    const slug = title.toLowerCase().split(' ').join('-');
    dbModel.find({ slug: slug }, (erorr, data) => {
        if (data.length > 0) {
            res.send('data already exists');
        }
        else {
            const addFav = new dbModel({
                title: title,
                slug: slug,
                artist_title: artist_title,
                description: description,
                thumbnail: thumbnail
            });
            addFav.save();
            res.send('add to fav list');
        }
    });
};


const readFav = async (req, res) => {
    dbModel.find({}, (eroor, data) => {
        res.send(data);
    });
};

const deletFav = async (req, res) => {
    const slug = req.params.slug;
    dbModel.remove({ slug: slug }, (erorr, data) => {
        if (erorr) {
            res.send('erorr');
        }
        else {
            dbModel.find({}, (erorr, data) => {
                res.send(data);
            });
        }
    });
};

const updateFav = async (req, res) => {
    const { description } = req.body;
    const slug = req.params.slug;
    dbModel.find({ slug: slug }, (erorr, data) => {
        if (erorr) {
            res.send('erorr');
        }
        else {
            data[0].description = description;
            data[0].save();
            dbModel.find({}, (erorr, data) => {
                res.send(data);
            });
        }
    });
};



module.exports = {
    creatFav,
    readFav,
    deletFav,
    updateFav
}