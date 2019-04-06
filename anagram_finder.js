const AnagramFinder = function (word) {
  this.word = word.toLowerCase()
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  const filteredWords = otherWords.filter( (word) => {
    return this.word.split("").sort().join("") == word.toLowerCase().split("").sort().join("")
    && this.word !== word.toLowerCase()

  })

  return filteredWords
}

module.exports = AnagramFinder;
