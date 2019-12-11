

function*  Source(){
       console.log("Part 1");
	   yield "India";
	   console.log("Part 2");
	   yield "China";
	   console.log("Part 3");
	   yield "Myanmar";
	   console.log("Finished");

}

function caller(){
	  let temp=Source();
	 
	  console.log("Caller Executing");
	  console.log(temp.next());
	  console.log(temp.next());
	  console.log(temp.next());
	  console.log(temp.next());
     /*for(let x of temp)
	 {
		 console.log("Processing.."+x);
	 }*/
}

caller();