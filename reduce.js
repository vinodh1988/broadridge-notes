

let a=['raj','ram','Ravi',"Ganesh","Rahul","Ramkumar","Peterson",
"Justin","Livingston","Jim","Ar","Rock","JonathanRoger"]

    let result= a.reduce( (a,b)=> {
		console.log(a,b);
		return a.length>b.length?a:b});
	
	console.log(result);
	
