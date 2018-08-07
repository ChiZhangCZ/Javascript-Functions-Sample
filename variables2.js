var chi = {name: "Chi", age: 23, occupation: "Trainee"};

function changeName(person, newName){
	person.name = newName;
	return person;
}

function addAge(person){
	person.age = person.age + 1;
	return person;
}