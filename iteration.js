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
			console.log(i+": FizzBuzz");
		}
		else if(i%3 == 0 && i%5 != 0){
			console.log(i+": Fizz");
		}
		else if(i%5 == 0 && i%3 != 0){
			console.log(i+": Buzz");
		}
		else{
			console.log(i.toString());
		}
	}
}