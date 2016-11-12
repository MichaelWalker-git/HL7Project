var field = require('./field');

function header() {

  this.name = arguments[0];
  arguments = arguments.splice(0, 1);
  this.delimiters = {
    fieldSeperator: "|",
    componentSeperator: "^",
    subcomponentSeperator: "&",
    escapeCharacter: "\\",
    repititionCharacter: "~",
    segmentSeperator: '\r'
  }

  this.fields = [];

  if (arguments.length > 1) {

    for (var i = 0; i < arguments.length; i++) {

      if (Array.isArray(arguments[i])) {
        var fields = new Array();
        for (var ii = 0; ii < arguments[i].length; ii++) {
          fields.push(new field(arguments[i][ii]));
        }
        this.fields.push(fields);
      } else {
        for (var i = 0; i < arguments.length; i++) {
          this.fields.push(new field(arguments[i]));
        }
      }
    }
  }
}

header.prototype.toString = function() {
  var returnString =
    this.name +
    this.delimiters.fieldSeperator +
    this.delimiters.componentSeperator +
    this.delimiters.repititionCharacter +
    this.delimiters.escapeCharacter +
    this.delimiters.subcomponentSeperator +
    this.delimiters.fieldSeperator

  for (var i = 0; i < this.fields.length; i++) {
    returnString += this.fields[i].toString(this.delimiters);

    if (i != this.fields.length - 1) returnString += this.delimiters.fieldSeperator

  }
  return returnString;
}

module.exports = header;
