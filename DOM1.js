function createParagraph(paraName){

	var para = document.createElement("p");
	var starter = document.createTextNode("Your paragraph");
	para.appendChild(starter);
	return para;
}

function fillParagraph(string){

	document.getElementsByTagName("p")[0].innerHTML = string;
}

function deleteParagraph(){

	var para = document.getElementsByTagName("p")[0];
    para.parentNode.removeChild(para);
}