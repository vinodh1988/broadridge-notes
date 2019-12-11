function* executor(){
     console.log("PART1");
	 yield "Ramesh";
	 console.log("PART2");
	 yield "Govind";
	 console.log("PART3");
	 yield "Namaan";
	 console.log("PART4");
	 yield "George";
	 console.log("PART5");

}

let gen=executor();
/**
 x=gen.next().value;
console.log("PART MINE"+x);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
x=gen.next().value;
console.log("PART MINE"+x);*/

for(x of gen){
	console.log("My part "+x);
}
