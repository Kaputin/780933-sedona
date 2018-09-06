var link = document.querySelector(".search-form-btn");
var form = document.querySelector(".appointment-form");
var arrival = document.querySelector("[name=arrival-date]");
var departure = document.querySelector("[name=Departure-date]");
var search = document.querySelector(".search-hotel");

form.classList.remove("appointment-form-show");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("appointment-form-show");
  arrival.focus();
});

search.addEventListener("click", function (event) {
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  if (!(arrival.value && departure.value)) {
    event.preventDefault();
    form.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (form.classList.contains("appointment-form-show")) {
      form.classList.remove("appointment-form-show");
    }
  }
});

search.onClick = function (evt) {

}