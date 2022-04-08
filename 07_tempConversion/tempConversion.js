const ftoc = function(F) {
  //[°C] = ([°F] − 32) × 5⁄9
  C = (F - 32) * 5/9
  if(C==0){
    return parseInt(C.toFixed())
  }else{
    return parseFloat(C.toFixed(1))
  }
  
};

const ctof = function(C) {
    //[°F] = [°C] × 9⁄5 + 32
      F = C * 9/5 + 32
      if(F == 0){
        return parseInt(F.toFixed(1));
      }else{
        return parseFloat(F.toFixed(1));
      }
      
};
//[°C] = ([°F] − 32) × 5⁄9
//[°F] = [°C] × 9⁄5 + 32
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
