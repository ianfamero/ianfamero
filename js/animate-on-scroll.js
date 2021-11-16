const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('title-picture')) {
        entry.target.classList.add('fade-in');
      } else if (entry.target.classList.contains('front-end-box')) {
        if(window.innerWidth > 885) {
          entry.target.classList.add('fade-in-left');
        }
      } else if (entry.target.classList.contains('ci-cd-box')) {
        if(window.innerWidth > 885) {
          entry.target.classList.add('fade-in-right');
        }
      } else {
        entry.target.classList.add('fade-in-up');
      }
    }
  });
});

// observed classes
observer.observe(document.querySelector('.title-picture'));
observer.observe(document.querySelector('.expertise-content'));
observer.observe(document.querySelector('.front-end-box'));
observer.observe(document.querySelector('.back-end-box'));
observer.observe(document.querySelector('.ci-cd-box'));
observer.observe(document.querySelector('.technical-skills-content'));
observer.observe(document.querySelector('.skills-container'));

