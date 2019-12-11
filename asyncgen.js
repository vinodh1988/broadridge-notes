
function asyncall(n){
   return new Promise((resolve,reject)=>{
	   setTimeout(()=>resolve("Executing after "+n+"Seconds") 
   ,n*1000);
});
}

function* multiCall(){
	console.log("First Part Started");
	yield asyncall(5);
	console.log("Second Part Started");
	yield asyncall(2);
	console.log("Third Part Started");
	yield asyncall(3);
	
} 

async function call(){
	 for(let x of multiCall()){
		let result =await x;
		console.log("My part executing and the result is");
		console.log(result);
	 }
	 console.log(12==="12");
	 console.log(12=="12");
		 
}
call();