function invertCase(word) {
  var wordArray = word.split('');
  for(var i = 0; i < wordArray.length; i++) {
    if(wordArray[i] == wordArray[i].toLowerCase()) {
    console.log(wordArray[i].toUpperCase());
    }

    else if(wordArray[i] == wordArray[i].toUpperCase()) {
    console.log(wordArray[i].toLowerCase());
    }

    else {
    console.log(wordArray[i]);
    }
}
}

invertCase('Hallo wie Geht Es');
