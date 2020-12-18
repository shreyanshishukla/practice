const mongoose =require('mongoose')
const uploadpath ="cover-images"
const bookschema=mongoose.Schema(
    {
      title:{
            type:String,
             required:true
        },
        publishedAt:
        {
            type:Date,
            required:true
        },
        description:
        {
            type:String,
        
        }
        ,
        covername:
        {
            type:String,
            required:true
        },
        pageCount:
        {
            type:Number,
            required:true
            
        },
        author:
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'Auhtor'
        },
        createdAt:
        {
            type:Date,
            required:true,
            default:Date.now
        }

    }
)
module.exports=mongoose.model('Book',bookschema)
module.exports.coverimageuploadpath=uploadpath