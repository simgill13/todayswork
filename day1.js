// Number 1 

console.log("my name is chris and I'm 29 years old!");

// number 2

function whoAmI() {
	console.log("my name is chris and I'm 29 years old!")
}

whoAmI();

// number 3
function whoAmI(name, age) 
	console.log(`my name is ${name} and I'am ${age} years old!`);
}

whoAmI();

// number 4 


function whoAmI(name, age) {
	var yearOfBirth = 2016 - age;
	console.log("my name is" + name + " and I'am " + age + "years old!");
	console.log("I was born in " + yearOfBirth);
}

whoAmI(chris, 29);

// number 5 


function yearOfBirth(age) {
	var yearOfBirth = 2016 - age;
	// this should throw an error
	// both the function name and the varriable are the same
}

function whoAmI (name, age) {

	var yob = yearOfBirth();
	// correct way
}

whoAmI();


number 6 --- concept of throw new error

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error("age can not be negative");
    }
    if (isNaN(age)) {
        throw new Error("hey man, you need to use a number");
    }
    return 2016 - age;


}

function displayAge(age) {
    try {
        var yob = yearOfBirth(age);
        console.log('you were born in ' + yob + ".");
    } catch (err) {
        console.log('whatever message: ' + err.message);
    }
}

displayAge(32);


number 7

function name(name, age) {

    if (name === undefined) {
        console.log("argument not valid");
    }

    if (age === undefined) {
        console.log("argument not valid");
    }
  


}

name();



number 8 




function checkValues (name, age) {

	if (typeof age !== number) {
		console.log('error message 1');
	}
	if (typeof	name !== string) {
		console.log("error message 2");
	}



}











