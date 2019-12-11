function changer(call){
	let messages=["Pendrive","Harddisk","Keyboard","Mouse"];
	call(messages[Math.floor(Math.random()*4)]);
}

class DataChanger{
     constructor(info){
	    this.info=info;
	 }
	 
	 display(){
	    console.log(this.info+"  is the information");
	 }
	 change(){
		/* changer(function(data){
			 this.info=data;
		 }.bind(this))*/
		 
		 changer((data)=>this.info=data);
	 }
}

var obj=new DataChanger("Bluetooth");
obj.display();
obj.change();
obj.display();