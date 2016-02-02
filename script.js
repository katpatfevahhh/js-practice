var computerChoice = Math.floor((Math.random() *50) + 1);

var userChoice = prompt ("Can you read my mind? Guess what number I am thinking about!");


while (userChoice != computerChoice) {
  	
	if (userChoice < computerChoice) {
	var userChoice = prompt ("The number I'm thinking of is higher. Keep guessing!");
	}
	else {
	var userChoice = prompt ("The number I'm thinking of is lower. Keep guessing!");
	}
};

if (userChoice === computerChoice) {
	console.log("You got it right!");
	}

console.log (compare(userChoice, computerChoice));
