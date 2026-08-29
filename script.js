document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.querySelector('.footer-content p');

  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Víctor Daniel Hualpa Yaqueno`;
  }
});
