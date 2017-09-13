
const MAX_MIDI = 108;
const MIN_MIDI = 21;




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

var octaveUp = (arrNotes) => {
  let finalList = [];
  for (var i=0; i< arrNotes.length; i++){
    finalList.push(arrNotes[i] + 12 );
  }

  return finalList;
};

var createNoteId = (startFrom) => {
  var obj = {};
  var notelist = Object.keys(startFrom);
  notelist.forEach( ( noteGroup ) => {
    //obj[noteGroup] = [];
    for (var i=0; i< 8; i++){
      let name = noteGroup + i;
      if (i === 0) {
        obj[name] = startFrom[noteGroup];
      }  else {
        obj[name] = startFrom[noteGroup];
      }
      startFrom[noteGroup] = startFrom[noteGroup] + 12;
    }
  });
  return obj;
};
////////////////////////////////////////
var noteStart = {
  "la": 21,
  "la_sharp": 22,
  "si": 23,
  "do": 24,
  "do_sharp": 25,
  "re": 26,
  "re_sharp": 27,
  "mi": 28,
  "fa": 29,
  "fa_sharp": 30,
  "sol": 31,
  "sol_sharp": 32
};

let possible_Do = getAllpoosiblePosition(noteStart.do);

var voz1 = [60, 62, 63, 60, 62];
var voz2 = [53, 55, 57, 53, 55];