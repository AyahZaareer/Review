const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const getAPI = require('./controllers/dataFormApi');
const dataFromDBcont = require('./controllers/dataFormDB');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3020;

app.get('/', (req, res) => {
    res.send('server working');
});

app.get('/art', getAPI);
//-----------------------------------------------------
app.post('/art/fav', dataFromDBcont.creatFav);
app.get('/art/fav', dataFromDBcont.readFav);
app.delete('/art/fav/:slug', dataFromDBcont.deletFav);
app.put('/art/fav/:slug', dataFromDBcont.updateFav);


mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});


app.listen(PORT, () => {
    console.log(`hello ${PORT}`)
});
