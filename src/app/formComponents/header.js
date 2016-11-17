var field = require('./field');

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

  this.fields = [];
  if (arguments.length > 1) {
    arguments.map(function (current) {
      if(Array.isArray(current)){
        var fields = new Array();
        current.map(function (subCurr) {
          fields.push(new field(subCurr));
        })
        this.fields.push(fields);
      }
    })else {
      for (var i = 0; i < arguments.length; i++) {
        this.fields.push(new field(arguments[i]));
      }
    }
  }
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
