const express = require('express')
const path = require('path')
const session = require('express-session')
const axios = require('axios')
const {checkToken,encodeSession,decodeSession} = require('./code')

const app = express()
axios.defaults.withCredentials = true;

let userInfo;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(async (req,res,next) => {

    //接收token
    if(req.path == '/auth' && req.query.sso_token){
        req.session.userToken = req.query.sso_token
    }

    //auth
    if(req.session.userToken){
        const response = await axios.post(`http://sso.com:9000/tokenValidation`,{
            sid: req.session.userToken,
            host: req.host
        })
        console.log(response.data)
        userInfo = checkToken(response.data)
        
    }else{
        return res.redirect(`http://sso.com:9000/login/?redirect=${req.protocol}://${req.host}:9001${req.originalUrl}`)
    }
    await next()
})



app.get('/',(req,res) => {
    console.log(userInfo)
    res.render('index',{
        title: 'site a oauth',
        data: JSON.stringify(userInfo)
    })
})

app.get('/auth',(req,res) => {
    res.redirect(req.query.redirect)
})


app.listen(9001,()=>console.log(9001))