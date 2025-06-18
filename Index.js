function initMap() {
  // Example coordinates - update with user delivery address
  const deliveryLocation = { lat: 43.6532, lng: -79.3832 }; // Toronto, for example

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: deliveryLocation,
  });

  const marker = new google.maps.Marker({
    position: deliveryLocation,
    map: map,
    title: "Delivery Address",
  });
}
