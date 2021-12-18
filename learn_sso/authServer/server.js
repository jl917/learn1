const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const url = require('url')
const {getToken,checkToken,encodeSession,decodeSession} = require('./code')
const uuid = require('uuid/v4')

const user = {
    username: 'dao',
    password: '123'
}

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))
app.use((req,res,next) => {
    next()
})


app.get('/',(req,res) => {

    res.render('index',{
        title: 'sign',
        user: req.session.user || '没有用户'
    })
})

app.get('/login',(req,res) => {

    if(req.session.user && req.query.redirect){
        redirect = redirectSite(req.query.redirect,req.session)
        return res.redirect(redirect)
    }

    return res.render('login',{
        title: 'Login - sso'
    })
    
})

app.post('/login',(req,res) => {

    let redirect = req.query.redirect || '/'
    //temp _ test

    if(user.username == req.body.userid && user.password == req.body.password){
        req.session.user = encodeSession(JSON.stringify({
            username: user.username,
            uid: uuid()
        }))
        if(req.query.redirect){
            redirect = redirectSite(req.query.redirect,req.session)
        }

        return res.redirect(redirect)
    }
    
    return res.send('账号或者密码错误')
})



app.post('/tokenValidation',(req,res) => {

    let _user = JSON.parse(decodeSession(req.body.sid))
    console.log(req.headers)
    console.log(req.session.sid)
    console.log(req.session.user)
    //sid不一样
    if(req.session.sid != req.body.sid){
        req.session.sid = null
    }

    //没有token
    if(!req.session.sid){

        req.session.sid = req.body.sid
        req.session.user = getToken({
            username: _user.username,
            somedata:'somedata',
            host: req.body.host
        })
        console.log(111)
        console.log(req.session.sid)
        console.log(111)
    }

    //已有token
    if(req.session.sid && req.session.sid == req.body.sid && req.session.user){
        return res.send(req.session.user)
    }

    
    
})



app.listen(9000,()=>console.log(9000))


let redirectSite = (urlSource,session) => {
    let _url = url.parse(urlSource)
    return `${_url.protocol}//${_url.host}/auth?sso_token=${session.user}&redirect=${_url.href}`
}

/*

let _url = url.parse(urlSource)
    let ssoToken = sendToken({
        username:decodeSession(session.user),
        somedata:'somedata',
        host: _url.host
    })
    let origin = `${_url.protocol}//${_url.host}/`
    return `${origin}auth?redirect=${_url.href}&sso_token=${ssoToken}`
*/