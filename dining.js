img = ""; 
objects = [];
status = "";

function setup()
{
    canvas = createCanvas(600, 300);
    canvas.position(325, 250);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log("Model Loaded");
   status = true;
   objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
    
function preload()
{
    img = loadImage('Room.jpg');
}

function draw()
{
  if(status != undefined);
  image(img, 0, 0, 600, 300);
  for(i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
}

function back()
{
    window.location = "index.html";
}