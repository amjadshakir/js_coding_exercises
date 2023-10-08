function isFloat(n){
	return Number(n) === n && n % 1 !== 0;
}

export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	let smallNumberArray = new Array();
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if(element<1){
			smallNumberArray.push(element);
		}
		
	} 
	return smallNumberArray;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	let namesBeginningWithArray = new Array();
	for (let index = 0; index < names.length; index++) {
		const element = names[index];
		if(element[0] === char){
			namesBeginningWithArray.push(element);
		}
		
	} 
	return namesBeginningWithArray;
}
export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	let verbsArray = new Array();
	for (let index = 0; index < words.length; index++) {
		const element = words[index];
		if(element.substring(0,3) === "to "){
			verbsArray.push(element);
		}
		
	} 
	return verbsArray;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	let integerArray = new Array();
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if(!isFloat(element)){
			integerArray.push(element);
		}
		
	} 
	return integerArray;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	let userCity = new Array();
	users.forEach(element => {
		userCity.push(element.data.city.displayName);
		
	});
	return userCity;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	const squareRoot = nums.map(nums =>parseFloat(Math.sqrt(nums).toFixed(2)));
	return squareRoot;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const lowercaseStr = str.toLowerCase(); 
  
  return sentences.filter(sentence => {
    const lowercaseSentence = sentence.toLowerCase();
    return lowercaseSentence.includes(lowercaseStr);
  });
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const longestSides = [];
    for (const triangle of triangles) {
    if (triangle.length !== 3) {
      throw new Error('Each triangle should have exactly 3 sides.');
    }  
    const [side1, side2, side3] = triangle;    
    const longestSide = Math.max(side1, side2, side3);
    longestSides.push(longestSide);
  }

  return longestSides;
}
