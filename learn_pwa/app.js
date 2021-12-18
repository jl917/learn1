const express = require('express')
const app = express()


app.use(express.static('service_worker'))


app.listen(8080, ()=> console.log(8080))