function initMap() {
  var mbs = {lat: 1.2836, lng: 103.8604};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mbs
  });
  var marker = new google.maps.Marker({
    position: mbs,
    map: map
  });

  map.setZoom(17);
}