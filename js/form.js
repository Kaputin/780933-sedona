  var link = document.querySelector(".search-form-btn");
  var popup = document.querySelector(".appointment-form");
 
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("appointment-form-show");
  });
 