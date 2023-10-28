export function stickyHeader() {
    const header = document.querySelector('.header');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    });
  }