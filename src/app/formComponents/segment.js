/**
 * Created by MikeTran on 11/11/16.
 */
var field = require('./field');
var repeatSearch = require('./repeatSearch');

var segment = function() {
  this.name = "";
  repeatSearch(component, components);
};

segment.prototype.addField = function(fieldValue, position) {
  if(position) {
    if (this.fields.length > (position - 1)){
      this.editField(position, fieldValue);
    } else {
      currentLength = this.fields.length;
      while (currentLength <= (position-2)) {
        this.addField("");
        currentLength = this.fields.length;
      }
      this.addField(fieldValue)
    }
  } else {
    this.fields.push(new field(fieldValue));
  }
};

segment.prototype.toString = function(delimiters) {
  var returnString = this.name + delimiters.fieldSeperator;
  for (var i = 0; i < this.fields.length; i++) {
    returnString += this.fields[i].toString(delimiters);
    if (i != this.fields.length -1) returnString += delimiters.fieldSeperator
  }
  return returnString;
};

module.exports = segment;
