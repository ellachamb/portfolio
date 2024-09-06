const text = "Welcome To My Portfolio.";
let i = 0;
let speed = 100; 

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter(); 
};