var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"
request.send();
    request.onload = function() {
    var requestData = request.response;
    var myP = document.createElement("p");
    var element = document.getElementById("main");

    for(var key of Object.keys(requestData)){

        if(key != "members"){

        	myP.innerHTML += (key.toUpperCase()+" : "+requestData[key]+"<br>");
        }
        else{

            myP.innerHTML += (key.toUpperCase()+" :<br><br>");
        	for(var member of requestData["members"]){

        		for(var memberKey of Object.keys(member)){

        			if(memberKey != "powers"){

        				myP.innerHTML += (memberKey.toUpperCase()+" : "+member[memberKey]+"<br>")
        			}
        			else{

        				myP.innerHTML += (memberKey.toUpperCase()+" : "+member[memberKey]+"<br><br>")
        			}       			
        		}

        	}
        }
    }
    element.appendChild(myP);
    }