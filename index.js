var express=require('express');
var path=require("path");
const fileUpload = require('express-fileupload');


var app=express();
app.use(fileUpload()); 

app.post("/fileupload",function(request,response){
	 let file= request.files.file;
     file.mv("/var/www/html/"+file.name);
	 response.send("file uploaded");
});
app.get("/Home",function(request,response){
    response.sendFile(path.join(__dirname,"public/static/index.html"));
})
app.get("/Hello",function(request,response){
    response.send("Hello from the app....!!!")
});
app.get("/",function(request,response){
    response.send("Node Express listener is working...!!!!!!");

})



app.listen("5600",function(){
   console.log("Server started and running in 5600");
});