var file = document.getElementById("finput");
var ima1;
var ima2;

function upload() {
  ima1 = new SimpleImage(file);
  var canvas1 = document.getElementById("can1");
  ima1.drawTo(canvas1);
  
  ima2 = new SimpleImage(file);
}

function makeGray() {
  for (var pixel of ima2.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas2 = document.getElementById("can2");
  ima2.drawTo(canvas2);
}
