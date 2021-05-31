const mongoose = require('mongoose');
const artFavAschema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true

    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    thumbnail: String,
    artist_title: String,
    description: String

});
const dbModel = mongoose.model('newMedle', artFavAschema);

module.exports = dbModel;
