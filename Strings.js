var elliott = 'He said "My name is Elliott"';
var elliottCap = elliott.toUpperCase();

var str = "Hello World";
var num = 111;

var strArray = ["John", "Jack", "Jill"];

function addString(string){
	strArray[strArray.length] = string;
	return strArray;
}

function removeString(){
	strArray.splice(strArray.length - 1, 1);
	return strArray;
}