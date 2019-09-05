function spellOutUnit(unit) {
	if(unit === 'invalid unit') return null;
  
	let list = {
		gal: "gallons",
		l: "litres",
		lbs: "pounds",
		kg: "kilograms",
		mi: "miles",
		km: "kilometres"
	};
  
	return list[unit];
	
};

module.exports = spellOutUnit;