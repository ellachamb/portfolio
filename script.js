document.addEventListener("DOMContentLoaded", function() {
  const text = "Welcome To My Portfolio.";
  let i = 0;
  const speed = 100; 
  const delayBeforeStart = 1000; 

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, delayBeforeStart);
});