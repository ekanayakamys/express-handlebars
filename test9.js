var express = require('express');
var app =express();
var mysql = require('mysql');
var bodyparser=require('body-parser');
app.use(bodyparser());
var handlebars =require('express-handlebars');
var con;
app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
    con.query("SELECT * FROM mytable",function(err,result){
        if(err)  throw err;
        res.render('home',{
            result:result
        
        });
}); 
});
app.post('/deleteuser',function(req,res){
    var ino =req.body.IndexNo;
    con.query("DELETE FROM mytable WHERE id="+ino+"; ",function(err,result){
        if(err)  throw err;
        
    });
});

app.listen(8080,function(){
    con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'newdb' 
    });
    console.log("connected to port 8080");
});