const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()

let user = {
    name: 'daolang',
    password: '111111'
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080, ()=> console.log('server run 8080'));

app.get('/',(req,res) => {
    res.send('首页 无token')
})

app.post('/auth', (req,res) => {
    console.log(req.body)
    req.body.name == user.name && req.body.password == user.password ?
    res.json({
        success: true,
        message: '授权成功',
        token: jwt.sign(user, 'jwt_secret',{
            expiresIn : 60*60*24// 授权时效24小时
        })
    })
    :
    res.json({
        success: false,
        message: '账号或者密码错误'
    })
})

let routes = express.Router()

app.use('/api',routes)
routes.use((req,res,next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    token ? 
    jwt.verify(token,'jwt_secret', (err,decode) => {
        if(err){
            res.status(403).json({
                success: false,
                message: '无效token 请重新获取'
            })
        }
        req.decode = decode;
        next()
    })
    :
    res.status(403).json({
        success: false,
        message: '没有token 请重新获取'
    })
})

routes.get('/', function(req, res) {
    console.log(req.decode)
    res.json(req.decode);
});

routes.get('/user', function(req, res) {
    res.json(user);
});
