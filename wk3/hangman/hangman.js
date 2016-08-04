(function() {
  var words = ['letter', 'hangman', 'computer', 'newspaper', 'bicycle', 'supermarket', 'cinema', 'hollidays', 'element', 'batman'];
  var randomWord;
  var input = document.getElementById('input');
  var wrong = document.getElementById('wrongletters');
  var key
  var lineArray = [].slice.call(document.getElementsByClassName('line'));
  var letterContainer = [].slice.call(document.getElementsByClassName('letter'));

  pickWord();

  function pickWord() {
    var selector = Math.floor(Math.random()*10);
    randomWord = words[selector];
  }

  var letters = randomWord.split('');
  showLines();

  console.log(randomWord);
  console.log(letters);


  function showLines() {
    for (var i = 0; i < randomWord.length; i++) {
      lineArray[i].classList.add('displayLine');
      letterContainer[i].innerHTML = letters[i];
    }
  }

  input.addEventListener('keypress', getKey);

  function getKey(e){
    key = e.key;
    letterPosition();
  }

  var positionInWord = [];
  var isInWord = true;

  function letterPosition() {
    for(var i = 0; i < letters.length; i++) {
      if(key === letters[i]) {
        console.log(i);
        positionInWord.push(i);
        console.log(positionInWord);
      }
    }
    isLetterInWord();
  }

  function isLetterInWord() {
    if(positionInWord.length === 0) {
      isInWord = false;
      console.log(isInWord);
    }
  }
  function showLetters() {
    if (isInWord) {
      for (var i = 0; i < positionInWord.length; i++) {
        letterContainer[i].classList.add('displayLetter');
      }
    }

  }
  /*function getInput(e){
      }
      else {
        wrong.textContent = e.key;
        console.log(e.key);
      }
    }

  }*/


})();
