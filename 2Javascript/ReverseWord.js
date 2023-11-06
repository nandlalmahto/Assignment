function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseWordsInSentence(sentence) {
  let reversedSentence = '';
  let word = '';
  let isWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === ' ') {
      if (isWord) {
        reversedSentence += reverseWord(word);
        isWord = false;
        word = '';
      }
      reversedSentence += ' ';
    } else {
      isWord = true;
      word += char;
    }
  }

  // Reverse the last word and add it to the result
  if (isWord) {
    reversedSentence += reverseWord(word);
  }

  return reversedSentence;
}

// Example usage:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
