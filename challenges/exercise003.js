export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	
	let squareArray = new Array();

	nums.forEach(element => {
		squareArray.push(element * element);
	});
	return squareArray;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let camelCaseWord ="" ;
	for (let index = 0; index < words.length; index++) {
		const element = words[index];
		if (index === 0){
		camelCaseWord = camelCaseWord + element;
	} else {
		camelCaseWord = camelCaseWord + element.substring(0, 1).toUpperCase() + element.substring(1, element.length);	
	}
	}
	return camelCaseWord;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	let subjectCount = 0;
	people.forEach(element => {
		subjectCount = subjectCount + element.subjects.length;
	});
	return subjectCount;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	let isIngredientAvailableInMenu = false;
	menu.forEach(element => {
		element.ingredients.forEach(actualIngredient => {
			if (actualIngredient === ingredient){
				return isIngredientAvailableInMenu = true;
			}
		});
	})
	return isIngredientAvailableInMenu;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let duplicateNumbersArray = new Array();

	for (let index = 0; index < arr1.length; index++) {
		const arr1Element = arr1[index];
		for (let index = 0; index < arr2.length; index++) {
			const arr2Element = arr2[index];
			if(arr1Element === arr2Element){
				duplicateNumbersArray.push(arr1Element);
			}			
		}	
	}
	let uniqueNumberArray = duplicateNumbersArray.sort().filter((element, index) => {
		return duplicateNumbersArray.indexOf(element) === index;
	});
	return uniqueNumberArray;
}
