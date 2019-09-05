function convert(initNum, initUnit) {
	
	let conversionTable = {
		galToL: {from: "gal", to: "l", rate: 3.78541},
		lbsToKg: {from: "lbs", to: "kg", rate: 0.453592},
		miToKm: {from: "mi", to: "km", rate: 1.60934}
	};
	
	let roundTo5decimals = (num) => parseFloat(num.toFixed(5))
	initNum = roundTo5decimals(initNum);
	
	let tableRow = null;
	
	for (let row in conversionTable) {
		let from = conversionTable[row].from;
		let to = conversionTable[row].to
		if( from === initUnit || to === initUnit) tableRow = conversionTable[row];
	}
	
	let multiply = (num, rate) => rate * num;
	let divide = (num, rate) => num / rate;
	
	let formula = (tableRow.from === initUnit)? multiply : divide;
	
	let result = formula(initNum, tableRow.rate);
	return roundTo5decimals(result);
	
}

module.exports = convert;