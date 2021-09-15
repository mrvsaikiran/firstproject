var express =require("express");
const { reset } = require("nodemon");
var app=express();
var path=require("path");
var hbs=require("hbs");
const { title } = require("process");
var staticpath=path.join(__dirname,'../html/css/back.css');
var templatepath=path.join(__dirname,"templates/views");
var partialspath=path.join(__dirname,"templates/partials")
var homepath=path.join(__dirname,'../headings/cloud.html')
var css=path.join(__dirname,"../javascript/css")
port=process.env.PORT || 8080;
require("./mongo");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
var Register=require("./mongo");
const { log } = require("console");
console.log(homepath);
app.use(express.static(staticpath));
// app.engine("handlebars",hbs.engine)
app.set("view engine","hbs");
app.set("views",templatepath);
// app.use('/css',express.static(__dirname ,css));
// hbs.registerPartial(partialspath);
app.get("/",(req,res)=>{
    res.render("login");
});
app.get("/web",(req,res)=>{
    res.render("web")
})
app.post("/",async(req,res)=>{
    try{
        // res.send(req.body.username);
        // console.log(req.body.username)
        const newuser=new Register({
            username:req.body.username,
            password:req.body.password
        })
        const registered =await newuser.save();
        // res.status(201).render(web);
        // res.send()
         user=req.body.username;
         pass=req.body.password;
        var data= await Register.findOne({username:user});
        // console.log(`${user} pasword is ${pass}`)
        console.log(`${data.username} password is ${data.password}`);
        if(data.password===pass)
        {
            res.render("web");
        }
        else{
            res.status(404).send(err);
        }
    }
    catch(err){
        console.log(err);
        res.render("error");
    }
})
app.get("/c",(req,res)=>{
    res.render("c")
})
app.get("/",(req,res)=>{
    res.send('sorry! for inconvience');
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})