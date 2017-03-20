var serial; // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var inData = 0;
var newNumber = 0;
var lastNumber = 0;
var difference = 0;

var x = 0;
var y = 0;
var center = [];
var xSpeed = 10;
var ySpeed = 20;
var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var color7;
var color8;
var color9;
var color10;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var k = 0;
var j = 0;

function setup() {

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  var options = {
    baudrate: 9600
  };
  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  fill(255);
  text("sensor value: " + inData, 30, 30);
  color1 = color(207, 30, 45, a);
  color2 = color(103, 255, 115, b);
  color3 = color(131, 232, 255, c);
  color4 = color(172, 181, 255, d);
  color5 = color(230, 255, 103, e);
  color6 = color(232, 180, 99, f);
  color7 = color(64, 146, 232, g);
  color8 = color(89, 255, 71, h);
  color9 = color(251, 55, 255, k);
  color10 = color(255, 255, 255, j);
  noStroke();
  if (x > width - 20) {
    xSpeed = -xSpeed;
  } else if (y > height - 20) {
    ySpeed = -ySpeed;
  } else if (y < 0) {
    ySpeed = abs(ySpeed);
  } else if (x < 0) {
    xSpeed = abs(xSpeed);
  }
  x += xSpeed;
  y += ySpeed;
  var coords = {
    x, y
  }
  center.push(coords);
  if (center.length > 10) {
    center.splice(0, 1);
  }

  for (var i = 0; i < (center.length); i++) {
    // Draw an ellipse for each element in the arrays. 
    // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(30, 207, 186, 80);
    ellipse(center[i].x, center[i].y, 20 + i, 20 + i);
    fill(color1);
    ellipse(center[i].x + 30, center[i].y + 19, 19 + i, 19 + i);
    fill(color2);
    ellipse(center[i].x + 45, center[i].y + 45, 18 + i, 18 + i);
    fill(color3);
    ellipse(center[i].x + 60, center[i].y + 60, 17 + i, 17 + i);
    fill(color4);
    ellipse(center[i].x + 75, center[i].y + 75, 16 + i, 16 + i);
    fill(color5);
    ellipse(center[i].x + 90, center[i].y + 90, 15 + i, 15 + i);
    fill(color6);
    ellipse(center[i].x + 105, center[i].y + 105, 14 + i, 14 + i);
    fill(color7);
    ellipse(center[i].x + 120, center[i].y + 120, 13 + i, 13 + i);
    fill(color8);
    ellipse(center[i].x + 135, center[i].y + 135, 12 + i, 12 + i);
    fill(color9);
    ellipse(center[i].x + 150, center[i].y + 150, 11 + i, 11 + i);
    fill(color10);
    ellipse(center[i].x + 165, center[i].y + 165, 10 + i, 10 + i);
  }
}

function serialEvent() {
  inData = Number(serial.read());
  lastNumber = newNumber;
  newNumber = inData;
  difference = newNumber - lastNumber;

  if (difference < 0) {

    if (newNumber == 1) {
      a = 80;
    }
    if (newNumber == 2) {
      b = 80;
    }

    if (newNumber == 3) {
      c = 80;
    }
    if (newNumber == 4) {
      d = 80;
    }
    if (newNumber == 5) {
      e = 80;
    }
    if (newNumber == 6) {
      f = 80;
    }
    if (newNumber == 7) {
      g = 80;
    }
    if (newNumber == 8) {
      h = 80;
    }
    if (newNumber == 9) {
      k = 80;
    }
    if (newNumber == 10) {
      j = 80;
    }
  } else if (difference > 0) {
    if (newNumber == 1) {
      a = 0;
    }
    if (newNumber == 2) {
      b = 0;
    }

    if (newNumber == 3) {
      c = 0;
    }
    if (newNumber == 4) {
      d = 0;
    }
    if (newNumber == 5) {
      e = 0;
    }
    if (newNumber == 6) {
      f = 0;
    }
    if (newNumber == 7) {
      g = 0;
    }
    if (newNumber == 8) {
      h = 0;
    }
    if (newNumber == 9) {
      k = 0;
    }
    if (newNumber == 10) {
      j = 0;
    }
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}