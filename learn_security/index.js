const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser'); 

const app = express()

app.use(helmet())
app.use(cookieParser('sign'))

app.get('/', (req,res) => {
    console.log(req.signedCookies)
    res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true,signed:true})
    res.cookie("age",'33',{maxAge: 80000, httpOnly: false,signed:true});
    res.send('축하한다 ')
})

app.listen(7777,()=> console.log(7777))