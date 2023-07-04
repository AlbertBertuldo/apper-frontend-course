function convertToVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    
    for (let char of word) {
      if (vowels.includes(char)) {
        result += char;
      }
    }
    
    return result;
  }
  
  const word = 'thisissomeword';
  const wordWithOnlyVowels = convertToVowels(word);
  console.log(wordWithOnlyVowels); // Output: "iioeo"
  