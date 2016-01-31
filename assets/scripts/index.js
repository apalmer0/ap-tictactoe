'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

$(document).ready(() => {
  $('.newgame').hide();
  var count = 0;
  var xWinCount = $('#xWins').val() || 0;
  var oWinCount = $('#oWins').val() || 0;
  var tieCount = $('#ties').val() || 0;
  var winner = '';
  var board = $('.board').children();
  var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  var tieBoard = function tieBoard() {
    for (let i = 0; i < board.length; i++) {
      $(board[i]).addClass('gray');
    }
  };

  var gameOver = function gameOver() {
    for (let i = 0; i < winningCombos.length; i++) {
      var a, b, c;

      a = board[winningCombos[i][0]];
      b = board[winningCombos[i][1]];
      c = board[winningCombos[i][2]];

      if ($(a).text() !== '' && $(a).text() === $(b).text() && $(a).text() === $(c).text()) {
        $(a).addClass('blue');
        $(b).addClass('blue');
        $(c).addClass('blue');
        winner = $(a).text();
        if (winner === 'X') {
          xWinCount++;
        } else if (winner === 'O') {
          oWinCount++;

        }

        return true;
      }

    }

    if (count === 9) {
      tieCount++;
      tieBoard();
      return true;
    }
  };

  var clearBoard = function clearBoard() {
    for (let i = 0; i < board.length; i++) {
      $(board[i]).text('');
      $(board[i]).removeClass('blue');
      $(board[i]).removeClass('gray');
    }
    count = 0;
    $('.newgame').hide();
  };

  $('.newgame').on('click', function() {
    clearBoard();
  });

  $('.square').on('click', function() {
    if (count % 2 === 0) {
      if ($(this).text() !== 'O') {
        $(this).text('X');
        count++;
      }
    } else {
      if ($(this).text() !== 'X') {
        $(this).text('O');
        count++;
      }
    }

    if (gameOver()) {
      $('#xWins').text(xWinCount);
      $('#oWins').text(oWinCount);
      $('#ties').text(tieCount);
      $('.newgame').show();
    }
  });
});
