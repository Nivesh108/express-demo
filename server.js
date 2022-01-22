const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;
const mongoose = require('mongoose');
const schemaa = require('./db.js');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test').then(() => {console.log('connected to mongodb')}).catch(err => {console.log(err)});
// console.log(app);
app.use(express.urlencoded({extended: true}), bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/getdata', async(req, res) => {
    const name = req.query.name;
    const data = await schemaa.find({name: name});
    console.log(data);
    res.send(JSON.stringify(data));

});
app.post('/createuser', async(req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    console.log(name, age);
    await schemaa.create({name:name, age:age});
    res.send('user created');
});
app.listen(port, () => {console.log('Server is running on port ' + port);});

