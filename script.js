// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
  });
  
  // Play/Pause functionality
  const playButton = document.querySelector('.play-button');
  const triangle = document.querySelector('.play-button .triangle');
  const audio = document.getElementById('song');
  let isPlaying = false;
  
  playButton.addEventListener('click', function () {
    if (!isPlaying) {
      audio.play();
      playButton.classList.add('active');
      triangle.classList.add('pause-icon');
    } else {
      audio.pause();
      playButton.classList.remove('active');
      triangle.classList.remove('pause-icon');
    }
    isPlaying = !isPlaying;
  });
  
  // Reveal animations on scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
  