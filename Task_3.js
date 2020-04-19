const myFunction = num => {
	
	let arr = [];
    let result;
    
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			result = "yu-gi-oh";
		} else if (i % 2 === 0 && i % 3 === 0) {
			result = "yu-gi";
		} else if (i % 2 === 0 && i % 5 === 0) {
			result = "yu-oh";
		} else if (i % 3 === 0 && i % 5 === 0) {
			result = "gi-oh";
		} else if (i % 2 === 0) {
			result = "yu";
		} else if (i % 3 === 0) {
			result = "gi";
		} else if (i % 5 === 0) {
			result = "oh";
		} else {
			result = i;
		}
		arr.push(result);
	}
	console.log(arr);
	return arr;
}
myFunction(100); 
myFunction(49);
