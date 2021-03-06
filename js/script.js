{

  const playGame = function (playerInput) {

    const clearMessages = function () {
      document.getElementById('buttons').innerHTML = '';
    }

    const getMoveName = function (argMoveId) {
      console.log('utworzona została funcja getMoveName z argumentem' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    /*Computer and Player moves*/

    const randomNumber = Math.floor(Math.random() * 3 + 1),
          argComputerMove = getMoveName(randomNumber),
          argPlayerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Mój ruch to: ' + argComputerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);

    /*Results of the game*/

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log('funkcja displayResult z argumentami: ' + argComputerMove + argPlayerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);
      if (argComputerMove == argPlayerMove) {
        printMessage('REMIS');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Wygrałem!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Wygrałem!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Wygrałem!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
      } else {
        printMessage('Oszukujesz!');
      }
    }

    displayResult(argComputerMove, argPlayerMove);

  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
  });

  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
  });

}







