/**
 * Created by MikeTran on 11/11/16.
 */
var component = require('./component');

function field() {
  this.value = [];
  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        var components = new Array();
        for (var j = 0; j < arguments[i].length; j++) {
          components.push(new component(arguments[i][j]));
        }
        this.value.push(components);
      } else {
        this.value.push(new component(arguments[i]));
      }
    }
  }
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
