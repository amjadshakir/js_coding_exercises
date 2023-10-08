// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

function isFloat(n){
	return Number(n) === n && n % 1 !== 0;
  }

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	return firstName.charAt(0) + "." +lastName.charAt(0);
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	let grossAmount = originalPrice + ((originalPrice * vatRate) / 100);
	if (isFloat(grossAmount))
	{
		return Number(grossAmount.toFixed(2));		
	}
	return grossAmount;	
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	let salesPrice = originalPrice - ((originalPrice * reduction) / 100);
	if (isFloat(salesPrice))
	{
		return Number(salesPrice.toFixed(2));		
	}
	return salesPrice;

}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	let string_len = str.length;
  if (string_len % 2 != 0) 
  {
    let start = (string_len - 1) / 2;
    return str.slice(start, start + 1)
  } 
  else 
  {
    let start = string_len / 2 - 1;
    return str.slice(start, start + 2);
  }
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	let newWord = new Array();
	words.forEach(element => {		
		newWord.push(element.split("").reverse().join(""));
	});
	return newWord;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	let count=0;
	users.forEach (element => 
		{
			if (element.type === "Linux"){
				count = count + 1;
			}
		}
	)
	return count;

}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	let scoresLength = scores.length;
	let totalScore= 0;
	scores.forEach( element => {
		totalScore = element + totalScore;
	})
	let meanScore = totalScore/scoresLength;
	if (isFloat(meanScore))
	{
		return Number(meanScore.toFixed(2));		
	}
	return meanScore;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	if(n%5===0 && n%3===0){
		return "fizzbuzz";
	}else if (n%5!=0 && n%3!=0){
		return n;
	}else if (n%5===0){
		return "buzz";
	}else if (n%3===0){
		return "fizz";
	}
}
