// contact-script.js
// Basic client-side validation + small UX for contact and newsletter forms

document.addEventListener('DOMContentLoaded', function () {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill name, email and message fields.');
      return;
    }
    // Basic email format check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    // At this point you can send data to your backend via fetch/ajax.
    // Example:
    // fetch('/api/contact', { method: 'POST', body: new FormData(contactForm) })
    //   .then(...)

    // For now, show success and reset:
    contactSuccess.hidden = false;
    setTimeout(() => { contactSuccess.hidden = true; }, 5000);
    contactForm.reset();
  });

  // Newsletter form
  const newsForm = document.getElementById('newsForm');
  const newsSuccess = document.getElementById('newsSuccess');

  newsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = newsForm.newsEmail.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Enter a valid email for newsletter.');
      return;
    }

    // Hook here to your mailing provider or backend
    newsSuccess.hidden = false;
    setTimeout(() => { newsSuccess.hidden = true; }, 4000);
    newsForm.reset();
  });
});
