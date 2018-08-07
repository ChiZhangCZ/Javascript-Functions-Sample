function tripleFinder(string){
	
	var tripleCount = 0
	for(i=0; i < string.length; i++){

		if(string.charAt(i) == string.charAt(i+1) && string.charAt(i+1) == string.charAt(i+2)){
			tripleCount++;
		}
	}
	return tripleCount;
}