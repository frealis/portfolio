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

  // microChat
  document.querySelector('.ext-link-microchat').addEventListener('click', () => {
    window.open('https://cs50-microchat.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-microchat-github').addEventListener('click', () => {
    window.open('https://github.com/frealis/micro-Chat', '_blank');
  });

  // Book Reviews w/Goodreads
  document.querySelector('.ext-link-bookreviews').addEventListener('click', () => {
    window.open('https://cs50-book-review-w-goodreads.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-bookreviews-github').addEventListener('click', () => {
    window.open('https://github.com/frealis/Book-Reviews-with-Goodreads', '_blank');
  });

  // Contact links (resume, email, GitHub, LinkedIn)
  const email = 'mhh129@gmail.com';
  // document.querySelector('.contact-link-resume').addEventListener('click', () => {
  //   window.open()
  // });
  document.querySelector('.contact-link-email').addEventListener('click', () => {
    window.open(`mailto:${email}`);
  });
  document.querySelector('.contact-link-email-copy').addEventListener('click', () => {
    const input = document.createElement('input');
    input.value = `${email}`;
    input.type = 'hidden';
    document.querySelector('.contact-email-address').appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();

  });
  document.querySelector('.contact-link-github').addEventListener('click', () => {
    window.open('https://github.com/frealis', '_blank');
  });
  document.querySelector('.contact-link-linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/matt-higginbotham', '_blank')
  });

  // Technology icons
  const aws = document.querySelectorAll('.ext-link-aws');
  aws.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://aws.amazon.com/', '_blank');
    });
  });
  const bootstrap = document.querySelectorAll('.ext-link-bootstrap');
  bootstrap.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://getbootstrap.com/', '_blank');
    });
  });
  const django = document.querySelectorAll('.ext-link-django');
  django.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.djangoproject.com/', '_blank');
    });
  });
  const flask = document.querySelectorAll('.ext-link-flask');
  flask.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('http://flask.pocoo.org/', '_blank');
    });
  });
  const heroku = document.querySelectorAll('.ext-link-heroku');
  heroku.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.heroku.com/', '_blank');
    });
  });
  const postgres = document.querySelectorAll('.ext-link-postgres');
  postgres.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.postgresql.org/', '_blank');
    });
  });
});