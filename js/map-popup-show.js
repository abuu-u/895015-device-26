var mapLink = document.querySelector(".contacts-map")
var mapPopup = document.querySelector(".map-popup");

var closeButton = mapPopup.querySelector(".close-button");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show");
    }
  }
});
