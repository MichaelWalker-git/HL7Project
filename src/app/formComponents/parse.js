var field = require('./field');

function parse(fieldInput){
  this.name = array.table;
  this.delimiters = {
    fieldSep: "|",
    componentSep: "^",
    subComponentSep: "&",
    escapeChar: "\\",
    repititionChar: "~",
    segmentSeparator: '\r'
  }

  let inputs = [];

  if(fieldInput.length > 1){
    for(let i = 0; i < fieldInput.length; i++){
      if(Array.isArray(fieldInput[i])){
        var results = [];
        for (let j = 0; j< fieldInput[i].length; j++){
          results.push(new field(fieldInput[i][j]));
        }
        inputs.push(results);
      } else {
        for(let k = 0; k< fieldInput.length; k++){
          inputs.push([fieldInput[k]]);
        }
      }
    }
  }
}

parse.prototype.addField = function()


module.exports = parse;
