var mergeAlternately = function (word1, word2) {
  let str = "";

  if (word2.length > word1.length) {
    for (let i = 0; i < word1.length; i++) {
      str = str + word1[i] + word2[i];
    }
    str = str + word2.substring(word1.length);
  } else if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
      str = str + word1[i] + word2[i];
    }
    str = str + word1.substring(word2.length);
  } else {
    for (let i = 0; i < word1.length; i++) {
      str = str + word1[i] + word2[i];
    }
  }
  return str;
};

console.log(mergeAlternately("abcd", "pq"));
