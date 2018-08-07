function oneToTen(){

	for(i=1;  i <= 10; i++){
		console.log(i);
	}
}

function  oneToTenEvens(){

	for(i=1;  i <= 10; i++){
		if(i%2 == 0){
		console.log(i);
	    }
	}
}

function fizzBuzz(){

	for(i=1; i<=100; i++){
		if(i%3 == 0 && i%5 ==0){
			console.log("FizzBuzz");
		}
		else if(i%3 == 0){
			console.log("Fizz");
		}
		else if(i%5 == 0){
			console.log("Buzz");
		}
		else{
			console.log(i);
		}
	}
}

function threeDivide(number){

	var count = 0;
	var tempNum = number;

	while(tempNum!=1){
		if(tempNum%3 == 0){
			tempNum = tempNum/3;
			count++;
			console.log(tempNum*3 + "/3 = " + tempNum);
		}
		else if((tempNum + 1)%3 == 0){
			tempNum++;
			count++;
			console.log(tempNum - 1 + " + 1 = " + tempNum);
		}
		else if((tempNum - 1)%3 == 0){
			tempNum -= 1;
			count++;
			console.log(tempNum + 1 + " - 1 = " + tempNum);
		}
	}
	console.log("Number of iterations: " + count);
}