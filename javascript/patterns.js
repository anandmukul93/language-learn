//functions are first classs objects
function isFirstClassObject(){
	console.log("function is an object");
}

// console.log(isFirstClassObject instanceof Object) // true
// isFirstClassObject.prop1 = "some property";
// console.log(isFirstClassObject) // { [Function: isFirstClassObject] prop1: 'some property' }

//functions define scope
function scopeVisibility(){
	var prop1 = "prop1";
	if(prop1){
		var prop1;
		console.log("scope visibility", prop1) // scope visibility prop1
	}
}

// scopeVisibility();


//ways to define a function

var add = function add(a,b){
	console.log(add.name);
}
var add2 = function(a,b){
	if(a != null)
	   add2();//see if you can call this function inside an unnamed expression
	else{
		console.log("called unnamed")
	}
}
function add3(a,b){
	console.log(add3.name);
}

add(); // add
add2(); //    - outputs nothing as unnamed expression so name property is not available and also immutable
add3(); //add3
Object.defineProperty(add2,"name",{writable:true}); //adds and defines the property to be mutable for add2
add2.name = "add2";
add2(1); //add2 



//checking access to this in js function
function usesThis(){
	        this.prop1 = "prop-in-declared";

	this.prop2  = function(){
		console.log("function declaration",this.prop1)
	}
	return prop2
}


var obj = {};
obj.prop1 = "prop1";
obj.prop2 = function(){
	console.log("objects function",this.prop1);
};

var callFunction = function(callBack,obj){
	if(typeof callBack === "function"){
		callBack();
	}
	else if (typeof callBack === "string" && obj){
		obj[callBack].call(this);
	}
	else if(obj){
		console.log("object passed")
		callBack.call(obj);
	}
}


callFunction(usesThis()());// should access the global object or undefined
callFunction(obj.prop2);//should access the global object or undefined
callFunction("prop2", obj);//should definitely access the obj.prop1 value in the obj.prop2 function

// So definitely one should understand that 'this' in a simple call context means the scope where this first meets up in the scope chain  and in case of binded invocation only
// it refers to the binded object, 

//** binded invocation happens when you call a function by obj.functionName or obj["functionName"]() or if you want to bind explicity to soem other object then you can 
//** simply add the obj.functionName.bind(obj2) or obj["functionName"].bind(obj2)


