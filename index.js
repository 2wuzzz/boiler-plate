const express = require('express');
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')

const url = "mongodb+srv://jhlee:1234@boilerplate.56qbl.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate";


async function runDB() {
    try {
        await mongoose.connect(url, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};
runDB().catch(console.dir);

app.get('/', (req, res) => res.send('Hello World!!!!!!!!!!!!!!'))

app.listen(port, ()=> console.log(`Example app Listenening on port ${port}`))