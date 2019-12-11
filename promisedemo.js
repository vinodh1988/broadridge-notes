
function source(data){
 return new Promise(function(resolve,reject){
	 
setTimeout(()=> 
  {
    result="Processed "+data;
     resolve(result);
  },3000);
	 
 });
}

async function caller(){
	result= await source("Java");
	console.log(result);
	console.log("After Code");
	
}

/*
function caller(){
   result=source("Java");
   result.then(
      (data)=>console.log(data),
	  (error)=>console.log(error)
   )
   console.log("After Code");
}*/

caller();
