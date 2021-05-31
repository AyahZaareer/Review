const superagent = require('superagent');
const artModel = require('../models/artModel.model');

const getAPI = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks?limit=10`;
    superagent.get(url).then(data => {
        const resData = data.body.data.map(art => {
            return new artModel(art);
        });
        res.send(resData);
    }).catch(erorr => {
        console.log(erorr);
    });
}

module.exports = getAPI;
