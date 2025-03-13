const express = require('express');
const app = express()
const port = 3000
const config = require('./config/key');

const {User} = require('./models/User');
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const url = "mongodb+srv://jhlee:1234@boilerplate.56qbl.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate";
async function runDB() {
    try {
        await mongoose.connect(config.mongoURI, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};
runDB().catch(console.dir);

app.get('/', (req, res) => res.send('Hello World!!!!!!!!!!!!!!'))

app.post('/register', (req, res) => {
    //회원가입시 필요한 정보들을 클라이언트에서 가져온 후 데이터베이스에 넣기
    const user = new User(req.body)

    user.save().then((userInfo) => {
        return res.status(200).json({
            success: true
        })
    }).catch((err) => {
        return res.json({success : false, err});
    })
})

app.listen(port, ()=> console.log(`Example app Listenening on port ${port}`))