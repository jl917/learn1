import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'

import Routes, {routerConfig} from '../router';

const app = express()

app.use(express.static('/Users/julong/Documents/learn_ssr/dist',{
    index:'a.html'
}))
//console.log(path.resolve(__dirname,'../../dist/'))


routerConfig.forEach(v => {

    app.get(v.path,(req,res) => {
        
        let content = ReactDOMServer.renderToString(
            <StaticRouter context={{}} location={v.path}>
                <Routes />
            </StaticRouter>
        )

        res.send(`<!DOCTYPE html>
<html>
<head>
<title>blog</title>
<meta charset="utf-8" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<div id="app">${content}</div>

<script type="text/javascript" src="http://localhost:3000/main.js"></script></body>
</html>`)
        
    })
})


app.listen(3000,console.log('listen port 3000'))