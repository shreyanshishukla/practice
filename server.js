const express=require('express');
const app =express();
const indexroute =require('./routes/route');
const author_route=require('./routes/author')
const expressLayouts =require('express-ejs-layouts');
const mongoose=require('mongoose')
app.set('view engine','ejs');
app.set('views',__dirname+'/views');//render will come and search in views automatically//google it too

app.set('layout','layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
mongoose.connect('mongodb+srv://shreyanshi:2ob1nM0SGEOyVyzA@cluster0.jddx8.mongodb.net/db1?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})
const db =mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log('connected to database'))
app.use('/',indexroute);
app.use('/authors',author_route)



app.listen(process.env.PORT || 3000);


