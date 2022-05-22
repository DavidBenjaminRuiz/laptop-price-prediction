require('dotenv').config();

const port = process.env.PORT || 8000;
const express = require('express');
const path = require('path');

const {makePrediction} = require('./src/controllers/predictionCtrl');

app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.post('/make-prediction', async (req,res) => {
    const prediction = await makePrediction(req, res);
    console.log(prediction);
    if (prediction) return res.json({
        prediction
    });
    res.status(404).send("Error");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});