const express=require("express")
const articleRouter =require("./routes/articles")
const mongoose=require("mongoose")
const app=express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const articles=[{
        title:'Test Article 1',
        createdAt:new Date(),
        description:'Test description'
    },
    {
        title:'Test Article 2',
        createdAt:new Date(),
        description:'Test description'
    }]

    // res.send("Welcome to my first fullstack developed website")
    res.render('articles/index',{articles:articles})
})
app.use("/articles",articleRouter)
app.listen(3000)