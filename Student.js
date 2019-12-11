
/*
function Student(sno,name){
    this.sno=sno;
	this.name=name;
}

Student.prototype.display=function(){
	console.log(this.sno+"  "+this.name);
}*/

class Student{

	constructor(sno,name){
		this.sno=sno;
		this.name=name;
	}
	display(){
		console.log(this.sno+"  "+this.name);
	}
}

var obj=new Student(12,"Ram");
var obj1=new Student(13,"Jacob");

obj.display();
obj1.display();
//Student();  //function call -- window.Student
//new Student(); //object creation