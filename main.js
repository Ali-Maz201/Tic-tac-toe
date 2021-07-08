var rounds = 0, firstPlayer, secondPlayer;
function startGame() {
  for(let i = 1; i <= 3; i++) {
    $("#game").append(`<div class="row" id="` + i + `"></div>`);
    for (var j = 1; j <= 3; j++) {
      $('#' + i).append(`<button type="button" class="cell" id="`+ i + j +`" onclick="return insertCell(this.id)"></button>`);
    }
  }
  selectPlayerNames();
  document.getElementById('start').style.display = "none";
  return false;
}
function selectPlayerNames() {
  firstPlayer = document.getElementById('firstPlayer').value;
  secondPlayer = document.getElementById('secondPlayer').value;
  if(firstPlayer == "") {
    firstPlayer = "player 1";
  }
  if (secondPlayer == "") {
    secondPlayer = "player 2";
  }
}

function insertCell(id) {
  let currentCell = document.getElementById(id);
  if (currentCell.textContent == "") {
    currentCell.textContent = ` ` + selectTurn() + ` `;
    checkWinner();
    ++rounds;
  }
}

function selectTurn() {
  if (rounds % 2 == 0) {
    return "X";
  }  else {
    return "0";
  }
}

function checkWinner() {
  var weHaveAWinner = 0;
  for (let i = 1; i <= 3; ++i) {
      if($('#' + i + '1').text() != "" && $('#' + i + '1').text() ==  $('#' + i + '2').text() && $('#' + i + '3').text() == $('#' + i + '1').text())  {
        weHaveAWinner = 1;
      }
      if ($('#1' + i).text() != "" && $('#1' + i).text() ==  $('#2' + i).text() && $('#3' + i).text() == $('#2' + i).text()) {
        weHaveAWinner = 1;
      }
  }
  if ($('#11').text() != "" && $('#11').text() ==  $('#22').text() && $('#22').text() == $('#33').text()) {
      weHaveAWinner = 1;
  }
  if ($('#13').text() != "" && $('#13').text() ==  $('#22').text() && $('#22').text() == $('#31').text()) {
    weHaveAWinner = 1;
  }
  if (weHaveAWinner == 1) {
    showWinner();
    resetGame();
  } else if (rounds == 8) {
    let message = document.getElementById('message');
    message.innerHTML = "We have a Draw !";
    resetGame();
  }
}

function showWinner() {
  let message = document.getElementById('message');
  if (rounds % 2 != 0) {
    firstPlayer = secondPlayer;
  }
  message.innerHTML = 'Congratulation ' + firstPlayer + ' you won !';
}

function resetGame() {
  setTimeout(function(){
    window.location.reload(1);
  }, 2500);
}
