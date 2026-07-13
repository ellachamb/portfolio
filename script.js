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

const cards = document.querySelectorAll('.card');
const MAX_TILT = 10;

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) - 0.5;
    const percentY = (y / rect.height) - 0.5;

    const rotateY = percentX * MAX_TILT * 2;
    const rotateX = percentY * -MAX_TILT * 2;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  });
});