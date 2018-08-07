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

	while(number!=1){
		if(number%3 == 0){
			number = number/3;
			count++;
			console.log(number*3 + "/3 = " + number);
		}
		else if((number + 1)%3 == 0){
			number++;
			count++;
			console.log(number - 1 + " + 1 = " + number);
		}
		else if((number - 1)%3 == 0){
			number -= 1;
			count++;
			console.log(number + 1 + " - 1 = " + number);
		}
	}
	console.log("Number of iterations: " + count);
}