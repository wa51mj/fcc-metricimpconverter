function getUnit(input) {
  let list = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
  let patt = /[a-zA-Z]+/
  
  let results = patt.exec(input);
	let match = (results) ? results[0]: null;
  
  let validInput = list.some(element => element === match);
  if(validInput) {
    return match.toLowerCase();
  }
  else{
    return 'invalid unit';
  }
}

module.exports = getUnit;