/**
 * Created by MikeTran on 11/17/16.
 */
function repeatSearch(genre, genres){
  this.genres = [];
  if (arguments.length > 1) {
    arguments.map(function (current) {
      if(Array.isArray(current)){
        var genres = new Array();
        current.map(function (subCurr) {
          genres.push(new genre(subCurr));
        })
        this.genres.push(genres);
      }
    })else {
      for (var i = 0; i < arguments.length; i++) {
        this.genres.push(new genre(arguments[i]));
      }
    }
  }
}

module.exports = repeatSearch;
