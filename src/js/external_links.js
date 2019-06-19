// Add event listeners to icons that handle taking users to an
// external link

document.addEventListener('DOMContentLoaded', () => {

  // River City Pro Wash
  document.querySelector('.ext-link-rcpw').addEventListener('click', () => {
    window.open('https://www.rivercityprowash.com', '_blank');
  });
  document.querySelector('.ext-link-rcpw-github').addEventListener('click', () => {
    window.open('https://github.com/frealis/River-City-Pro-Wash', '_blank');
  });

  // Pinocchio's Pizza & Subs
  document.querySelector('.ext-link-pinocchios').addEventListener('click', () => {
    window.open('https://cs50-pinocchios-pizza.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-pinocchios-github').addEventListener('click', () => {
    window.open('https://github.com/frealis/Pinocchios-Pizza-And-Subs', '_blank');
  });

  // Technology icons
  document.querySelector('.ext-link-bootstrap').addEventListener('click', () => {
    window.open('https://getbootstrap.com/', '_blank');
  });
  document.querySelector('.ext-link-django').addEventListener('click', () => {
    window.open('https://www.djangoproject.com/', '_blank');
  });
  document.querySelector('.ext-link-postgres').addEventListener('click', () => {
    window.open('https://www.postgresql.org/', '_blank');
  });
  document.querySelector('.ext-link-aws').addEventListener('click', () => {
    window.open('https://aws.amazon.com/', '_blank');
  });

});