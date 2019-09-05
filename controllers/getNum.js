var resolveNumber = require('./getNumHelper');

function getNum(input){
  let patt = /(^\d+)(\.)?(\d+)?(\/)?(\d+)?(\.)?(\d+)?/ // see 2.2.4

	let results = patt.exec(input);
	if(!results) return 1; // if no pattern match quick return
  
	let isFraction = results[4];
	if(isFraction) {
  		//console.log('dividor present');
    
      let isDoubleFraction = arr => arr.indexOf('/') !== arr.lastIndexOf('/');
      if(isDoubleFraction(input.split(''))) return 'invalid number';
  
  		let numerator = { left: results[1], decimal: results[2], right: results[3]};
  		let denominator = { left: results[5], decimal: results[6], right: results[7]};
  
  		let numeratorResolved = resolveNumber(numerator);
  		let denominatorResolved = resolveNumber(denominator);
		  return numeratorResolved/denominatorResolved
	}
	else{
  		//console.log('no dividor present');
  		let number = { left: results[1], decimal: results[2], right: results[3]};
  		let numberResolved = resolveNumber(number);
		return numberResolved
	}
}

module.exports = getNum;