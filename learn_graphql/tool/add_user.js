const request = require('superagent');
const mongoose = require('mongoose');

global.dbHandle = require('../db/handle');
global.db = mongoose.connect("mongodb://localhost:27017/graphql_user");
const userDB = global.dbHandle.getModel('user');

request
.get("https://randomuser.me/api/?results=500")
.end((err, res) => {
    res.body.results.forEach(e => {
        userDB.find({username:e.login.username}, (err,doc) => {
            doc[0] ? 
            '' : 
            userDB.create({
                name: `${e.name.first} ${e.name.last}`,
                username: e.login.username,
                password: e.login.password,
                gender: e.gender,
                email: e.email,
                phone: e.phone,
                pic: e.picture.thumbnail
            }, (err,doc) => {
                console.log(doc)
            })
        })
    });
})