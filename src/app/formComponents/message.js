/**
 * Created by MikeTran on 11/11/16.
 */
var header = require('./header');
var segment = require('./segment');

function message() {
  this.header = new header();
  this.segments = [];
  if (arguments.length > 0) {
    arguments.map(function(currArg){
      this.header.addField(currArg);
    })
  }
};

message.prototype.addSegment = function() {
  if (arguments.length === 1) {
    var s = new segment(arguments[0]);
    this.segments.push(s);
    return s;
  } else if (arguments.length > 1) {
    var s = new segment(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      s.addField(arguments[i]);
    }
    this.segments.push(s);
    return s;
  }
};

message.prototype.toString = function() {
  var returnString = this.header.toString() + this.header.delimiters.segmentSeperator;
  for (var i = 0; i < this.segments.length; i++) {
    returnString += this.segments[i].toString(this.header.delimiters);
    if (i != this.segments.length - 1) returnString += this.header.delimiters.segmentSeperator;
  }
  return returnString.replace(/^\s+|\s+$/g, '');
};

module.exports = message;
