var writeUsLink = document.querySelector(".write-us-button");

var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = writeUsPopup.querySelector(".close-button");

var writeUsName = writeUsPopup.querySelector("[name=name]");
var email = writeUsPopup.querySelector("[name=email]");
var letterText = writeUsPopup.querySelector(".write-us-textarea");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
  nameStorage = localStorage.getItem("writeUsName");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("write-us-show");

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
  writeUsPopup.classList.remove("write-us-show");
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("write-us-show")) {
      writeUsPopup.classList.remove("write-us-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});
