// Script to control gates based on menu item.
// Input (Selection, Number of options) –> Output (One_hot list of 0s and a 1 on the selected channel)
// Eg: [1,4] -> [0, 1, 0, 0]

var myval = 0;

if (jsarguments.length > 1)
	myval = jsarguments[1];

function bang() {
	outlet(0, myval);
}

function oneHotEncode(selection, numberOfItems) {
	// Create an array of 0s with the length of numberOfItems
	// And a 1 at the index of selection
	var result = new Array(numberOfItems);
	for (var i = 0; i < numberOfItems; i++) {
		result[i] = 0;
	}
	if (selection >= 0 && selection < numberOfItems) {
		result[selection] = 1;
	}
	return result;
}

function list() {
	var inputMessage = arrayfromargs(arguments);

	if (inputMessage.length != 2) {
		post("Input message should be a list of size 2");
	} else {
		var selection = inputMessage[0];
		var numberOfOptions = inputMessage[1];

		if (numberOfOptions < 1) {
			post("Give number of options greater than 0");
		}
		else {
			myval = oneHotEncode(selection, numberOfOptions);
			bang();
		}
	}
}

function anything() {
	// var a = arrayfromargs(messagename, arguments);
	// post("received message " + a + "\n");
	// myval = a;
	// bang();
}
