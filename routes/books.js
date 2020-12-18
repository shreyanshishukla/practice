const express = require('express')
const bookmodel=require('../models/book')
const path=require('path')
const uploadpath=bookmodel.coverimageuploadpath
const authormodel =require('../models/author')
const multer=require('multer')
const mime=['image/jpeg','image/jpg','image/gif','image/png']
const storage=multer.diskStorage({
    destination: (req,file,cb)=>
    {
        cb(null,path.join('public',uploadpath))
    },
    filename:function (req,file,cb)
    {
        cb(null,file.fieldname+ '-'+Date.now()+path.extname(file.originalname))
    }
   }
)
const router = express.Router()
const upload =multer({storage:storage,fileFilter: (req,file,cb)=>
    {
        
        cb(null,mime.includes(file.mimetype) )
       
    }})
router.get('/',(req,res)=>
{
    res.send('ok')
})
router.get('/new',async (req,res)=>
{  
    try
    {const allauthor =await authormodel.find({}) 
    res.render('books/new',{book:new bookmodel(),Author:allauthor})}
catch
{ 
    res.render('books/new',{book:new bookmodel(),Author:allauthor,err:"errors"} )
}})
router.post('/',upload.single('coverImage'),(req,res)=>
{ console.log(req.file)
    console.log(mime.includes(req.file.mimetype))
    res.render('books/index',{
        title:req.body.title,
        author:req.body.author,
        publishedAt:req.body.publishedAt,
        pageCount:req.body.pageCount,
        description:req.body.description,
        image:req.file
    })
})

module.exports=router