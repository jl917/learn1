const express = require('express')
const winston = require('winston');
const expressWinston = require('express-winston')
const cookieParser = require('cookie-parser');  
const app = express()
const logToDb = require('./logToDb')


app.use(cookieParser())
app.use('*',(req,res,next) => {
    req.cookies.userid ? "" : res.cookie("userid",'daol',{maxAge: 900000000000, httpOnly: true});
    next()
})

app.use(expressWinston.logger({
    transports: [
        new logToDb()
        /*new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })*/
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}))

app.get('/', (req, res) => {
    res.send('hello dlrow')
})




app.listen(3010, () => console.log(3010))



