// Smooth Scrolling for all anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {

      target.scrollIntoView({ behavior: 'smooth' });

    }

  });

});

// Form Validation

function handleSubmit(event) {

  event.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();

  const email = document.getElementById('email').value.trim();

  const address = document.getElementById('address').value.trim();

  const phone = document.getElementById('phone').value.trim();

  let errors = [];

  // Full Name validation

  if (fullName.length < 3) {

    errors.push('Please enter a valid name (at least 3 characters).');

  }

  // Email validation using simple regex

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    errors.push('Please enter a valid email address.');

  }

  // Address validation

  if (address.length < 5) {

    errors.push('Please enter a valid address.');

  }

  // Phone number validation (10 digits)

  if (!/^\d{10}$/.test(phone)) {

    errors.push('Please enter a valid 10-digit phone number.');

  }

  if (errors.length > 0) {

    alert(errors.join('\n'));

  } else {

    alert('Form submitted successfully!');

    event.target.reset(); // Reset form after successful validation

  }

}