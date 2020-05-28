const express = require('express');
const path = require('path')

const router = express.Router();

const route = 'pages'

router.get("/", (req,res) =>{
    res.render(path.join(route,'/index.ejs'), {message: "new ejs file!"})
  })

module.exports = () =>{
    return router
}