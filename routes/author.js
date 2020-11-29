const express=require("express")
const router= express.Router()
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
    res.render('authors/new')

})
//create author route which will create an author
//post request is takes us to the mentioned page by us 
router.post('/',(req,res)=>
{
    res.send("created")
})
module.exports=router