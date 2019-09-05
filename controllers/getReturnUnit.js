function getReturnUnit(initUnit) {
	if(initUnit === 'invalid unit') return 'invalid unit';
  
	let list = [["gal", "l"],[ "lbs", "kg"], ["mi", "km"]];
  
	let category = list.find( arr => arr.includes(initUnit) );
	
	let initUnitPosition = category.indexOf(initUnit);
	let returnUnitPosition = (initUnitPosition === 1) ? 0 : 1;
	
	let returnUnit = category[returnUnitPosition];
	
	return returnUnit;
}

module.exports = getReturnUnit;