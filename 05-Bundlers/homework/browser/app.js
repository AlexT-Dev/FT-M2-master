
//Se comenta para requerir el whiteboard
//var whiteboard = window.whiteboard; // Está usando el módulo whiteboard y socket.io
// var whiteboard = require('./whiteboard.js'); Para usarse sin inport
import whiteboard from './whiteboard.js';
//Se comenta para requerirlo
//var socket = window.io(window.location.origin); //Cuando es una function
//var socket = require('socket.io-client');  //Para usarse sin import 
import io from 'socket.io-client';
socket.on('connect', function () {
  console.log('Connected!');
});

socket.on('load', function (strokes) {

  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });

});

socket.on('draw', function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on('draw', function (start, end, color) {
  socket.emit('draw', start, end, color);
});


