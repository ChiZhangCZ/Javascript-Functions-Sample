var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"
request.send();
    request.onload = function squad() {
    var requestData = request.response;
    var myP = document.createElement("p");

    for(var key of Object.keys(requestData)){

        if(key != "members"){

        	document.write(key.toUpperCase()+" : "+requestData[key]+"<br><br>");
        }
        else{

            document.write(key.toUpperCase()+" :<br><br>");
        	for(var member of requestData["members"]){

        		for(var memberKey of Object.keys(member)){

        			if(memberKey != "powers"){

        				document.write(memberKey.toUpperCase()+" : "+member[memberKey]+"<br><br>")
        			}
        			else{

        				document.write(memberKey.toUpperCase()+" : "+member[memberKey]+"<br><br><br>")
        			}       			
        		}

        	}
        }
    }
    }