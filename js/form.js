  var link = document.querySelector(".search-form-btn");
  var popup = document.querySelector(".appointment-form");
  var arrival = popup.querySelector("[name=arrival-date]");
  var Departure = popup.querySelector("[name=Departure-date]");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("appointment-form-show");
  });


  popup.addEventListener("submit", function (evt) {
    if (!arrival.value || !Departure.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("arrival", arrival.value);
      }
    }
  });
