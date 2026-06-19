8:44 PM
New messages
async function submitOrder() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const business = document.getElementById('business').value.trim();
  const type = document.getElementById('type').value;
  const budget = document.getElementById('budget').value;
  const desc = document.getElementById('desc').value.trim();
  const msg = document.getElementById('success-msg');

  if (!name || !phone || !business || !type || !desc) {
    msg.style.color = '#ff4d4d';
    msg.textContent = '⚠️ Please fill all required fields!';
    return;
  }

  try {
    const response = await fetch("https://formspree.io/f/xaqzrepl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        business,
        type,
