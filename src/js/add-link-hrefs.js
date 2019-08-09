// Assign event handlers to links
export function addLinkHrefs() {

  // Contact
  const link_contact_nodelist = document.querySelectorAll('.link-contact')
  link_contact_nodelist.forEach((link_contact) => {
    link_contact.addEventListener('click', () => {
      window.location.href = '#anchor-contact'
    })
  })

  // Projects
  const link_projects_nodelist = document.querySelectorAll('.link-projects')
  link_projects_nodelist.forEach((link_projects) => {
    link_projects.addEventListener('click', () => {
      window.location.href = '#anchor-projects'
    })
  })

  // River City Pro Wash
  document.querySelector('.ext-link-rcpw').addEventListener('click', () => {
    window.open('https://www.rivercityprowash.com', '_blank');
  });
  document.querySelector('.ext-link-rcpw-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/River-City-Pro-Wash', '_blank');
  });

  // Pinocchio's Pizza & Subs
  document.querySelector('.ext-link-pinocchios').addEventListener('click', () => {
    window.open('https://cs50-pinocchios-pizza.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-pinocchios-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/Pinocchios-Pizza-And-Subs', '_blank');
  });

  // microChat
  document.querySelector('.ext-link-microchat').addEventListener('click', () => {
    window.open('https://cs50-microchat.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-microchat-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/micro-Chat', '_blank');
  });

  // Book Reviews w/Goodreads
  document.querySelector('.ext-link-bookreviews').addEventListener('click', () => {
    window.open('https://cs50-book-review-w-goodreads.herokuapp.com/', '_blank');
  });
  document.querySelector('.ext-link-bookreviews-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg/Book-Reviews-with-Goodreads', '_blank');
  });

  // Email
  const email = 'mhh129@gmail.com';
  document.querySelector('.contact-link-email').addEventListener('click', () => {
    window.open(`mailto:${email}`);
  });

  // GitHub
  document.querySelector('.contact-link-github').addEventListener('click', () => {
    window.open('https://github.com/matthigg', '_blank');
  });

  // LinkedIn
  document.querySelector('.contact-link-linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/matt-higginbotham', '_blank')
  });

  // AWS
  const aws = document.querySelectorAll('.ext-link-aws');
  aws.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://aws.amazon.com/', '_blank');
    });
  });

  // Bootstrap
  const bootstrap = document.querySelectorAll('.ext-link-bootstrap');
  bootstrap.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://getbootstrap.com/', '_blank');
    });
  });

  // Django
  const django = document.querySelectorAll('.ext-link-django');
  django.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.djangoproject.com/', '_blank');
    });
  });

  // Flask
  const flask = document.querySelectorAll('.ext-link-flask');
  flask.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('http://flask.pocoo.org/', '_blank');
    });
  });

  // Heroku 
  const heroku = document.querySelectorAll('.ext-link-heroku');
  heroku.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.heroku.com/', '_blank');
    });
  });

  // PostgreSQL
  const postgresql = document.querySelectorAll('.ext-link-postgresql');
  postgresql.forEach((icon) => {
    icon.addEventListener('click', () => {
      window.open('https://www.postgresql.org/', '_blank');
    });
  });

}