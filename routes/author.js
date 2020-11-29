const express=require("express")
const router= express.Router()
const Author =require('../models/author')


//different routing
//author homepage which will show all authors list
//get request shows usthe requested page by user
router.get('/',async(req,res)=>
{ let Searchoptions = {}
  if (req.query.name!= null && req.query.name!=='')
     Searchoptions.name=new RegExp(req.query.name,'i')
     try{
    const authors =await Author.find(Searchoptions)
    res.render('authors/index',{authors: authors,searchoptions:req.query.name}) // sending an author module to pg ie new.ejs which uses _formfield partial which uses this author object as value attribute of input tag
}
catch{
     res.render('authors/index',{authors:{},message:"cannt find"})
}
    
})
//new author route which will called when a new author is created 
router.get('/new',(req,res)=>
{res.render('authors/new',{author:new Author()})
})
//create author route which will create an author
//post request is takes us to the mentioned page by us 
router.post('/',async(req,res)=>
{   const author= new Author(
    {name:req.body.name})
  try{
    const authornew = await author.save()
    res.send(req.body.name)
  }
  catch{
      res.render('authors/new',{author:author,message:"error creating try again"})
  }
})
module.exports=router