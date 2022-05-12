x = 0;
y = 0;

draw_apple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
var screen_width = 0;
var screen_height= 0;
var apple = "";
var speak_data = "";
var to_number = "" ;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage(apple.png)
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content)
}

function setup() {
 screen_width = window.innerWidth;
 screen_height=window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


