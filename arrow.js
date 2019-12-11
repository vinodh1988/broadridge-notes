

var a=function(){
   console.log("funny");
}

var sum=function(a,b){
    return a+b;
}

a();
console.log(sum(34,34));

var x=()=>console.log("funny");
var y=(a,b)=>a+b;
var z=()=>{
	console.log("line1");
	console.log("line2");
}

x();
console.log(y(34,43));
z();