function reverse(word) {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }
  
  const word = 'Albert';
  const reversedWord = reverse(word);
  console.log(reversedWord); // Output: 'olleh'
  