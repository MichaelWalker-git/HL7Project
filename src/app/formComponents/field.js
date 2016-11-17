/**
 * Created by MikeTran on 11/11/16.
 */
// This component holds both the header and segment.
var component = require('./component');
var repeatSearch = require('./repeatSearch');

function field() {
  repeatSearch(component, components);
};

field.prototype.toString = function(delimiters) {
  var returnString = "";
  for (var i = 0; i < this.value.length; i++) {
    if (Array.isArray(this.value[i])) {
      for (var j = 0; j < this.value[i].length; j++) {
        returnString += this.value[i][j].toString(delimiters);
        if (j != this.value[i].length - 1) returnString += delimiters.componentSeperator;
      }
    } else {
      returnString += this.value[i].toString(delimiters);
    }
    if (i != this.value.length - 1) returnString += delimiters.repititionCharacter
  }
  return returnString;
};

module.exports = field;
