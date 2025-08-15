const texts = [
      "Frontend Developer",
      "HTML, CSS and JS Design"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseBetween = 1000;

    function type() {
      const element = document.getElementById("typewriter");
      const currentText = texts[textIndex];

      if (isDeleting) {
        charIndex--;
        element.textContent = currentText.substring(0, charIndex);
      } else {
        charIndex++;
        element.textContent = currentText.substring(0, charIndex);
      }

      // Determine timing and state
      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        timeout = pauseBetween;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        timeout = typingSpeed;
      }

      setTimeout(type, timeout);
    }

    // Start typing immediately
    type();

    //Fade Secyion
    const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});

elements.forEach(el => {
  el.style.animationPlayState = 'paused'; // Don't run immediately
  observer.observe(el);
});

// For Workexperience to education and other 
const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.main-container');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all contents
      contents.forEach(c => c.classList.remove('active'));
      // Show selected content
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });