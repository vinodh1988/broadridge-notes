function promiseProvider(n){
   return new Promise(function(resolve,reject){
	   setTimeout(
	     ()=>resolve(Math.round(Math.random()*10000)),
		 n*1000
	   )
   });
}

function* multiData(count){
	     for(let i=0;i<count;i++){
			 let duration=Math.round(Math.random()*4);
			 console.log("Data requested and will be provided after"+duration+" seconds");
			 yield  promiseProvider(duration);
		 }
	
}

async function caller(){
	   for( let  x of multiData(5)){
		   let result=   await x;
		   console.log("Value received "+result);
	   }
}

caller();