(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const roles = ['AI & DATA EXPLORER', 'PYTHON DEVELOPER', 'MACHINE LEARNING LEARNER', 'GENERATIVE AI ENTHUSIAST'];
  const roleNode = document.getElementById('role-text');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % roles.length;
    roleNode.animate([{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 380, easing: 'ease-out' });
    roleNode.textContent = roles[index];
  }, 2800);
})();
