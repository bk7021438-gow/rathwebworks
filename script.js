<form id="orderForm">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Order Now</button>
</form>

<script>
document.getElementById("orderForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch("https://formspree.io/f/xaqzrepl", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    alert("Order submitted successfully!");
    this.reset();
  } else {
    alert("Failed to submit order.");
  }
});
</script>
