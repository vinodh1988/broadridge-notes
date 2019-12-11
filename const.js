var student={sno:12,name:"Raj",city:"Chennai"}

const {sno,name,city}=student;

console.log(sno);
console.log(name);
console.log(city);

const {name:firstName}=student;

console.log(firstName);

let a={eno: 12, name: "George"}

b={...a,desig: 'manager'};

console.log(b);
console.log(a==b);

