/*
*
*       Complete the handler logic below
*            
*/
var getNum = require('./getNum');
var getUnit = require('./getUnit');
var getReturnUnit = require('./getReturnUnit')
var spellOutUnit = require('./spellOutUnit')
var convert = require('./convert')
var getString = require('./getString')

function ConvertHandler() {
  
  this.getNum = function(input) {
    return getNum(input);
  };
  
  this.getUnit = function(input) {
    return getUnit(input);
  };
  
  this.getReturnUnit = function(initUnit) {  
    return getReturnUnit(initUnit);
  };

  this.spellOutUnit = function(unit) {
    return spellOutUnit(unit)
  };
  
  this.convert = function(initNum, initUnit) {
    return convert(initNum, initUnit);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return getString(initNum, initUnit, returnNum, returnUnit)
  };
  
}

module.exports = ConvertHandler;