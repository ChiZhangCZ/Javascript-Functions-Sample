function createParagraph(string){

	var para = document.createElement("p");
	var starter = document.createTextNode(string);
	para.appendChild(starter);
	return para;
}

function fillParagraph(paraNumber,string){

	document.getElementsByTagName("p")[paraNumber].innerHTML = string;
}

function deleteParagraph(paraNumber){

	var para = document.getElementsByTagName("p")[paraNumber];
    para.parentNode.removeChild(para);
}