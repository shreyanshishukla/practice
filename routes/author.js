const express=require("express")
const router= express.Router()
const Author =require('../models/author')


//different routing
//author homepage which will show all authors list
//get request shows usthe requested page by user
router.get('/',(req,res)=>
{
    res.render('authors/index')
})
//new author route which will called when a new author is created 
router.get('/new',(req,res)=>
{
    res.render('authors/new',{author: new Author()}) // sending an author module to pg ie new.ejs which uses _formfield partial which uses this author object as value attribute of input tag

})
//create author route which will create an author
//post request is takes us to the mentioned page by us 
router.post('/',(req,res)=>
{
    res.send(req.body.name)//req.body simply means the body of form sending post req//express can read variables we need to use body parser for this

})
module.exports=router