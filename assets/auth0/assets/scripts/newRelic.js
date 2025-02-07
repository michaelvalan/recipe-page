alert(document.domain)
fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Sydney&key=AIzaSyBUbXWTugEFKIsopK8EWo9oVycZf2pJUqU")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
