var tries;
var victory = 0;
var defeat = 0;
var wordcount = 0;
var wordChoices = ["vintage", "retro", "horse", "camera", "chariot", "classical", "vulnerable", "prime", "excellent", "nostalgic", "evocative", "expressive", "reminiscent", "optical", "focal", "visual", "endearing", "captivating", "charming", "irresistible"]
var chosenWord;
var word;

var lettersGuessed = [];


window.onload = function() {
	startGame();
}

function startGame() {
	var random = Math.floor(Math.random() * wordChoices.length);
	tries = 7;
	updateTries();
	lettersGuessed = [];
	chosenWord = wordChoices[random];
	word = new Array(chosenWord.length);
	var targetLetter = document.getElementById("word");
	targetLetter.innerHTML = "";
	// console.log(chosenWord);
	for (i = 0; i < chosenWord.length; i++) {
		
		var letter = document.createElement("div");
		targetLetter.appendChild(letter);
		letter.setAttribute("class", "letter");
		letter.setAttribute("id", "letter-" + i)
	}
}
function updateTries() {
	var triesElement = document.getElementById("tries-number");
	triesElement.innerHTML = "" + tries;
}

function updateDefeat() {
	var lossElement = document.getElementById("loss-number");
	lossElement.innerHTML = "" + defeat;
}

function updateVictory() {
	var victoryElement = document.getElementById("win-number");
	victoryElement.innerHTML = "" + victory;
}

function updateWord(index) {
	letter = chosenWord[index];
	word[index] = letter;
	targetLetter = document.getElementById("letter-" + index);
	targetLetter.innerHTML = letter;
}

function updateUsedLetters() {
	var guessedElement = document.getElementById("letters-picked");
	guesses = lettersGuessed.sort().join(" ");
	guessedElement.innerHTML =  guesses;
}

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}




document.onkeyup = function(event) {
	var userGuess = event.key;
	if (lettersGuessed.indexOf(userGuess) == -1) {
		lettersGuessed.push(userGuess);
		updateUsedLetters();
	} else {
		alert("You have already used that letter");
		return
	}
	indexes = getAllIndexes(chosenWord, userGuess);
	if (indexes.length == 0) {
		tries--;
		updateTries();
		if (tries > 0) { 
			alert("This letter isn't in the word");
			return
		} else {
			loseGame();
		}
	}

	indexes.forEach(updateWord);

	if (chosenWord == word.join("")) {
		winGame();
	}
	
}

function loseGame() {
	alert("You missed too many letters, try again.");
	defeat++;
	updateDefeat();
	startGame();
}

function winGame() {
	victory++;
	updateVictory();
	alert("You WON!");
	startGame();
}


var lossElement = document.getElementById("loss-number");
lossElement.innerHTML = "" + defeat;











