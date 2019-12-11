
function  source(data,call){
  console.log("Starting the function source");
  setTimeout(function(){
      call(data.length);
  },3000);
  console.log("Ending the function source");
} 
//function definition

//function call
source("caller string", function(receive){
	console.log("My part");
	console.log("recieved"+receive);
	
});

console.log("Code after source call");


