let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'papier';
}
  
if(randomNumber == 3){
  computerMove = 'nożyce'
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
  playerMove = 'papier';
}

if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == playerMove ){
    printMessage('Remis');
  } else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Jestem sprytniejszy, wygrałem!');
  } else if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Jestem sprytniejszy, wygrałem!');
  } else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Jestem sprytniejszy, wygrałem!');
  } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('oszukujesz!');
  }