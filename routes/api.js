/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
			let result = null;
			
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      //console.log(`initNum is ${initNum}`)
      var initUnit = convertHandler.getUnit(input);
      //console.log(`initUnit is ${initUnit}`)
			
			let validNumber = initNum !== 'invalid number'
			let validUnit = initUnit !== 'invalid unit'		
			
			if(validNumber && validUnit) {
				var returnNum = convertHandler.convert(initNum, initUnit);
				var returnUnit = convertHandler.getReturnUnit(initUnit);
				var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
				
				result = {initNum, initUnit, returnNum, returnUnit, string: toString}
			}
			else {
				if(!validNumber && !validUnit) {
					result = {string: 'invalid number and unit'};
				}
				else if(!validNumber){
					result = {string: 'invalid number'};
				}
				else if(!validUnit){
					result = {string: 'invalid unit'};
				}
				else {
					throw "problem!"
				}
					
			}
			
      res.json(result);
    });
    
};
