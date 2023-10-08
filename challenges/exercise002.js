function isFloat(n){
	return Number(n) === n && n % 1 !== 0;
}

export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
		return person.city === "Manchester";	
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	let busNumbers = people/40;
	if (isFloat(busNumbers)){
		return Number(Math.trunc(busNumbers)) + 1;	
	} else return busNumbers;		
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let count = 0;
	arr.forEach(element => {
		if(element==='sheep'.toLowerCase()){
			count = count + 1;
		}
	})
	return count;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	if (person.address.city ==="Manchester"){
		return true;
	} else return false;
}
