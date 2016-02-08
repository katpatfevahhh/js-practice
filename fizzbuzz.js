var userChoice = prompt ("Pick a number, any number!");

var fizzBuzz = function(userChoice){

for (var i = 0; i < userChoice; i++) {
	 
	 if (i%3==0 && i%5==0) {
	 	console.log("FizzBuzz");
	 }

	 else if (i%5==0) {
	 	console.log("Buzz");
	 }

	 else if (i%3==0) {
	 	console.log("Fizz");
	 }

	 else {
	 	console.log(i);
	 }

}

};


console.log(fizzBuzz(userChoice))



