//  Jedi name

function jediName(firstName, lastName) {
	var firstThree = firstName.substring(0, 2);
	var lastThree =  lastName.substring(0, 2);
	console.log(" I am  the great " + firstThree + lastThree);
	
}


// To infinity
function beyond(num) {
	if (num === Infinity || num === -Infinity) {
		console.log("And beyond");
	}
		else if((num !== Infinity && num !== -Infinity) && num > 0){
		  console.log('To infinity');
		}
		else if((num !== Infinity && num !== -Infinity) && num < 0){
		  console.log('To negative infinity');
		}
	  else if (num === 0) {
		console.log("staying Home");
	}
}

beyond();


// CRACKING THE CODE 

var results = [];
var word = "craft block argon meter bells brown croon droop";
var string = word.split(" ");
for (var i = 0; i < string.length; i++) {


    switch (string[i][0]) {
        case "a":
            results.push(string[i][1]);
            
            break;

        case "b":
            results.push(string[i][2]);
            break;

        case "c":
            results.push(string[i][3]);
            break;

        case "d":
            results.push(string[i][4]);
            break;

        default:
            results.push(" ");
            break;


    }


}

console.log(results);





// Days in a month

function daysOfMonth(month) {


		switch (month) {

			case "April":
			case "June":
			case "September":
			case "November":
				console.log(month + " has 30 days");
				break;

			case "February":
				console.log(month + " has 28 days");
				break;

			default:
				console.log(month + " has 31 days");
				break;



		}
}

daysOfMonth("April");




// Rock paper scissors



// 1 = rock
// 2 = paper
// 3 = scissors


function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
    var rock = 1;
    var paper = 2;
    var scissors = 3;

    if (computer == 1 && userChoice  == 2) {

    	console.log("paper wins");
    }
    else if (computer == userChoice) {
      console.log("You have tied with the computer ");
    }
    else if (computer == 2 && userChoice == 3) {
      console.log("scissors win");
    }
    else if (computer == 3 && userChoice == 1) {
      console.log("Rock wins");
    }else if (computer == 1 && userChoice == 3) {
      console.log("Rock wins");
    }else if (computer == 2 && userChoice == 1) {
      console.log("paper wins");
    }else if (computer == 3 && userChoice == 2 ) {
      console.log("scissors Win");
    }
}

RockPaperScissors(3);




// Data driven  way 



var responses = {
    11: "Draw - rock vs rock",
    12: "Computer wins - paper covers rock",
    13: "Player wins - rock smashes scissors",
    21: "Player wins - paper covers rock",
    // etc
}
function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
    return responses["" + computer + userChoice];
}

RockPaperScissors(2);




