
/**
 * [description]
 * @param  {[type]} v1 [description]
 * @param  {[type]} v2 [description]
 * @return {[type]}    [description]
 */
var distancesBetween = (v1, v2) => {
  let finalList = [];
  for (var i=0; i< v1.length; i++){
    var a = v1[i] - v2[i];
    console.log(a);
      finalList.push(a);
  }

  return finalList;
};

/**
 * [description]
 * @param  {[type]} stepList [description]
 * @return {[type]}          [description]
 */
var compareSteps = (stepList) => {
  let finalList = [];
  for (var i=0; i< stepList.length; i++){
    if(stepList[i] == stepList[i + 1]){
      if ( stepList[i + 1] == 7 ) {
        finalList.push('hay 5° paralela entre los pasos ' + i + ' y ' + (i+1));
            }
        }
  }

  return finalList;
};

/**
 * [description]
 * @param  {[type]} noteValue [description]
 * @return {[type]}           [description]
 */
var getAllpoosiblePosition = (noteValue) => {
  let posiblePositionArray = [noteValue];
  var max = parseInt( (127 - noteValue ) / 12 );
  var min = parseInt(64/12);
  var counter1 = noteValue;
  var counter2 = noteValue;

  for (var i=0; i<min; i++){
    counter1 = counter1 - 12;
    posiblePositionArray.push(counter1);
    }

  for (var i=0; i<max; i++){
    counter2 = counter2 + 12;
    posiblePositionArray.push(counter2);
    }

  return posiblePositionArray;
};

////////////////////////////////////////
var Do = 64;
let possible_Do = getAllpoosiblePosition(Do);
var voz1 = [64, 66, 68];
var voz2 = [57, 59, 61];
var stepList =distancesBetween(voz1, voz2);
