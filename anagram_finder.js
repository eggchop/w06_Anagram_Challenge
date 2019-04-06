const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  return otherWords.filter( (word) => {
    return this.word.split("").sort().join("") == word.toLowerCase().split("").sort().join("")
    && this.word !== word.toLowerCase();
  })
}

module.exports = AnagramFinder;
