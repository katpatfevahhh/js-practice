var user_birthday = prompt ("What is your birthday? Enter it in this format: DD/MM/YYYY");

var res = user_birthday.split("/");

console.log(res[2]);

console.log(res);

var currentDate = Date.now()

var d = new Date(1999, 02, 15);

var res2 = currentDate.split("/");

console.log(res2[2]);

console.log(res2);

var ageCalculator = function(birthday){

};

ageCalculator(user_birthday);