'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

$(document).ready(() => {
  var count = 0;
  var board = $('.board').children();
  var currentState = [];
  var updateBoard = function updateBoard(){
    for ( let i = 0; i < board.length; i++){
      currentState[i] = $(board[i]).text();
    }
  };
  $('.square').on('click', function(){
    if (count % 2 === 0){
      if( $(this).text()!=='O'){
        $(this).text('X');
        count++;
        updateBoard();
      }
    } else {
      if( $(this).text()!=='X'){
        $(this).text('O');
        count++;
        updateBoard();
      }
    }
    console.log(currentState);
  });
});
