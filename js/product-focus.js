var addCart = document.querySelectorAll(".add-cart");
var addComparison = document.querySelectorAll(".add-comparison");

addCart.forEach(function(elem) {
    elem.addEventListener("focus", function() {
      elem.parentElement.classList.add("product-buttons-wrapper-show");
    });

    elem.addEventListener("blur", function() {
      elem.parentElement.classList.remove("product-buttons-wrapper-show");
    });
});

addComparison.forEach(function(elem) {
  elem.addEventListener("focus", function() {
    elem.parentElement.classList.add("product-buttons-wrapper-show");
  });

  elem.addEventListener("blur", function() {
    elem.parentElement.classList.remove("product-buttons-wrapper-show");
  });
});
