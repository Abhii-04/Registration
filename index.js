const express = require ('express');
const app = express();
const path = require('path');
const user = require('./Userschema');
const { userInfo } = require('os');

app.use(express.static(path.join(__dirname + '/public')));



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', async (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/register', async (req,res)=>{
    let{name,email,dob,password} = req.body;
    let createduser = await user.create({name,email,dob,password});
    res.send(createduser);
});

app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).send("Error retrieving users from the database.");
        } else {
            res.json(users);
        }
    });
});



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});