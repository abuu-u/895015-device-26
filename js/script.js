var writeUsLink = document.querySelector(".write-us-button");

var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = writeUsPopup.querySelector(".close-button");

var writeUsName = writeUsPopup.querySelector("[name=name]");
var email = writeUsPopup.querySelector("[name=email]");
var letterText = writeUsPopup.querySelector(".write-us-textarea");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

var mapLink = document.querySelector(".contacts-map")
var mapPopup = document.querySelector(".map-popup");

var mapClose = mapPopup.querySelector(".close-button");

try {
  nameStorage = localStorage.getItem("writeUsName");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("hidden");

  if (nameStorage && !emailStorage) {
    writeUsName.value = nameStorage;
    email.focus();
  } else {
    writeUsName.focus();
  }

  if (emailStorage && !nameStorage) {
    email.value = emailStorage;
    writeUsName.focus();
  }

  if (emailStorage && nameStorage) {
    writeUsName.value = nameStorage;
    email.value = emailStorage;
    letterText.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("hidden");
  writeUsPopup.classList.remove("modal-error");
});

writeUsPopup.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !email.value || !letterText.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("writeUsName", writeUsName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    mapPopup.classList.add("hidden");
    writeUsPopup.classList.remove("write-us-show");
    writeUsPopup.classList.add("hidden");
  }
});
