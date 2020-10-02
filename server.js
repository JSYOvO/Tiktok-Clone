import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js';

// app config
const app = express();
const port = 9000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Header','*'),
    next()
})

//DB config
const connection_url = "mongodb+srv://admin:i47fJxUAasv0CGaN@cluster0.mlppr.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello Word');
})

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data);
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    // Post request is to Add Data to the database
    // It will let us Add a cideo Documents to the videos COLLECTION
    const dbVideos = req.body;
    console.log(dbVideos);

    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

// listen
app.listen(port,  () =>  console.log(`listening on localhost : ${port}`));

// i47fJxUAasv0CGaN