function theBeatlesPlay (musicians, instruments) {
  var finalArray = [];

  for (var i = 0; i < musicians.length; i++) {
    finalArray.push(musicians[i] + ' plays' + instruments[i])
  }
  return finalArray;
}
