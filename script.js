const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');

      // animate skill bars once their card is revealed
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        if (w) requestAnimationFrame(() => bar.style.width = w + '%');
      });

      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));