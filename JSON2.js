var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"
request.send();

var myP = document.createElement("p");

function kingFinder(kingName){

    myP.innerHTML = "";
	var kings = request.response;
	kingName = kingName.toUpperCase();
	
	var element = document.getElementById("King Search Result");

	for(var king of kings){

		if(kingName == "" || kingName == " "){

			element.appendChild(myP);
		}

		else if(king["nm"].toUpperCase().includes(kingName) || kingName.includes(king["nm"].toUpperCase())){

			for(var key of Object.keys(king)){

				myP.innerHTML += key.toUpperCase()+" : "+king[key]+"<br>";
			}

			myP.innerHTML += "<br>"
			element.appendChild(myP);
		}
	}
}


