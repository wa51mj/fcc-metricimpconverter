function resolveNumber({left, right, decimal}) {
  // func: takes an object with three properties
  // @left - should be either undefined or a string that can be resolved to an integer
  // @right - should be either undefined or a string that can be resolved to an integer
  // @decimal - should be either undefined or ''
  // will return either
  //    a number if left or right resolve to numbers
  //    'invalid number' if left or right do not resolve to numbers
  if(right){
    
    if(left && decimal){
      return parseFloat(left + decimal + right)
    }
    else if(decimal){
      return parseFloat('0' + decimal + right)
    }
    else{
      return parseInt(right)
    }
    
  }
  else if(left){
    return parseInt(left)
  }
  else{
    return 'invalid number'
  }
  
}

module.exports = resolveNumber;