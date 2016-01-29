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
  var top = $('.board').find('.top');
  var mid = $('.board').find('.mid');
  var bot = $('.board').find('.bot');
  var left = $('.board').find('.left');
  var center = $('.board').find('.center');
  var right = $('.board').find('.right');
  var crossDown = $('.board').find('.crossDown');
  var crossUp = $('.board').find('.crossUp');

  var findWinner = function findWinner(){
    if($(top[0]).text() === 'X' && $(top[1]).text() === 'X' && $(top[2]).text() === 'X' ||
        $(mid[0]).text() === 'X' && $(mid[1]).text() === 'X' && $(mid[2]).text() === 'X' ||
        $(bot[0]).text() === 'X' && $(bot[1]).text() === 'X' && $(bot[2]).text() === 'X' ||
        $(left[0]).text() === 'X' && $(left[1]).text() === 'X' && $(left[2]).text() === 'X' ||
        $(center[0]).text() === 'X' && $(center[1]).text() === 'X' && $(center[2]).text() === 'X' ||
        $(right[0]).text() === 'X' && $(right[1]).text() === 'X' && $(right[2]).text() === 'X' ||
        $(crossDown[0]).text() === 'X' && $(crossDown[1]).text() === 'X' && $(crossDown[2]).text() === 'X' ||
        $(crossUp[0]).text() === 'X' && $(crossUp[1]).text() === 'X' && $(crossUp[2]).text() === 'X' ||
        $(top[0]).text() === 'X' && $(top[1]).text() === 'X' && $(top[2]).text() === 'X' ||
        $(mid[0]).text() === 'O' && $(mid[1]).text() === 'O' && $(mid[2]).text() === 'O' ||
        $(bot[0]).text() === 'O' && $(bot[1]).text() === 'O' && $(bot[2]).text() === 'O' ||
        $(left[0]).text() === 'O' && $(left[1]).text() === 'O' && $(left[2]).text() === 'O' ||
        $(center[0]).text() === 'O' && $(center[1]).text() === 'O' && $(center[2]).text() === 'O' ||
        $(right[0]).text() === 'O' && $(right[1]).text() === 'O' && $(right[2]).text() === 'O' ||
        $(crossDown[0]).text() === 'O' && $(crossDown[1]).text() === 'O' && $(crossDown[2]).text() === 'O' ||
        $(crossUp[0]).text() === 'O' && $(crossUp[1]).text() === 'O' && $(crossUp[2]).text() === 'O'){
      return true;
    } else {
      return false;
    }
  };
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
    if(findWinner()){
      console.log('Game over');
    }
  });
});
