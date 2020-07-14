/* modal */

var modalButton = document.querySelector(".contacts__button");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".close_modal");
var modalForm = document.querySelector(".modal__form");
var modalName = document.querySelector("#modal-name-field");
var modalEmail = document.querySelector("#modal-email-field");
var modalText = document.querySelector("#modal-text-field")

var isStorageSupport = true;
var storageName = "";
var storageEmail = ""

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal_active");

    if (storageName && storageEmail) {
        modalName.value = storageName;
        modalEmail.value = storageEmail;
        modalText.focus();
      } else {
        modalName.focus();
      } 
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal_active");
    modal.classList.remove("modal_error");
});

modalForm.addEventListener("submit", function (evt) {
    if(!modalName.value || !modalEmail.value || !modalText.value) {
        evt.preventDefault();
        modal.classList.remove("modal_error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal_error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalName.value);
            localStorage.setItem("email", modalEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal_active")) {
        evt.preventDefault();
        modal.classList.remove("modal_active");
        modal.classList.remove("modal_error");
      }
    }
  });

/* map */
var mapButton = document.querySelector(".contacts__img");
var map = document.querySelector(".map");
var mapClose = document.querySelector(".close_map");


mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("map_active");

});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("map_active");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (map.classList.contains("map_active")) {
        evt.preventDefault();
        map.classList.remove("map_active");
      }
    }
  });


/* slider */

var controls = document.querySelectorAll(".slider-controls__button")

var changeSlide = function(control) {
    var slideNumber = control.dataset.slide;

    document.querySelector(".slider-controls__button_active").classList.remove("slider-controls__button_active");
    control.classList.add("slider-controls__button_active");

    document.querySelector(".slider-item_active").classList.remove("slider-item_active");
    document.querySelector(`.slider-item:nth-child(${slideNumber})`).classList.add("slider-item_active");
  };
  
  controls.forEach(function(control) {
    control.addEventListener("click", function(evt) {
      evt.preventDefault();
      changeSlide(control);
    });
  });

/* services */


  var controls = document.querySelectorAll(".services__button")

  var changeSlide = function(control) {
      var slideNumber = control.dataset.slide;
  
      document.querySelector(".button_active").classList.remove("button_active");
      control.classList.add("button_active");
  
      document.querySelector(".services__item_active").classList.remove("services__item_active");
      document.querySelector(`.services__item:nth-of-type(${slideNumber})`).classList.add("services__item_active");
    };
    
    controls.forEach(function(control) {
      control.addEventListener("click", function(evt) {
        evt.preventDefault();
        changeSlide(control);
      });
    });