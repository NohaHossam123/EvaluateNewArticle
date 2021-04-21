require('dotenv').config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = 5000;
const URL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res)=>{
    res.sendFile('dist/index.html');
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/article',async(req,res)=>{

    const { url } = req.query;

    try{
        const dataResult = await fetch(`${URL}?key=${apiKey}&url=${url}&lang=en`);
        const result = await dataResult.json();
        const agreement = result.agreement;
        const subjectivity = result.subjectivity;
        const confidence = result.confidence;
        res.send({ agreement, subjectivity, confidence});

    }catch(err){
        return res.status(500).json({ message: err.message});
    }

})

app.listen(PORT, (err) =>{
    if(err) console.log('There is somthing error...')
    console.log(`Start server on port ${PORT}`)
})
