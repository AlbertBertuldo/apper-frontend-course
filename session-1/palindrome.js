function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
  }
  
  const word = 'level'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }