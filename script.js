function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = '#2a1f00';
  } else {
    navbar.style.borderBottomColor = '#222';
  }
});

function submitOrder() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const business = document.getElementById('business').value.trim();
  const type = document.getElementById('type').value;
  const desc = document.getElementById('desc').value.trim();
  const msg = document.getElementById('success-msg');

  if (!name || !phone || !business || !type || !desc) {
    msg.style.color = '#ff4d4d';
    msg.textContent = '⚠️ Please fill all required fields!';
    return;
  }

  if (phone.length < 10) {
    msg.style.color = '#ff4d4d';
    msg.textContent = '⚠️ Please enter a valid phone number!';
    return;
  }

  msg.style.color = '#D4AF37';
  msg.textContent = `✅ Thank you ${name}! We'll contact you at ${phone} within 24 hours.`;

  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('business').value = '';
  document.getElementById('type').value = '';
  document.getElementById('budget').value = '';
  document.getElementById('desc').value = '';

  msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .portfolio-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});