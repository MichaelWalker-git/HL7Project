// This component is meant to represent the header title(ie. PIV) and encompass the fields (ie address)
var field = require('./field');
var repeatSearch = require('./repeatSearch');

function header() {

  this.name = arguments[0];
  this.delimiters = {
    fieldSeperator: "|",
    componentSeperator: "^",
    subcomponentSeperator: "&",
    escapeCharacter: "\\",
    repititionCharacter: "~",
    segmentSeperator: '\r'
  };
  repeatSearch(field, fields)
}

header.prototype.addField = function(fieldValue) {
  this.fields.push(new field(fieldValue));
};

header.prototype.toString = function() {
  var returnString =
    this.name +
    this.delimiters.fieldSeperator +
    this.delimiters.componentSeperator +
    this.delimiters.repititionCharacter +
    this.delimiters.escapeCharacter +
    this.delimiters.subcomponentSeperator +
    this.delimiters.fieldSeperator;

  for (var i = 0; i < this.fields.length; i++) {
    returnString += this.fields[i].toString(this.delimiters);

    if (i != this.fields.length - 1) returnString += this.delimiters.fieldSeperator
  }
  return returnString;
};

module.exports = header;
