window.addEventListener("DOMContentLoaded", function () {

    "use strict";
    let dropdown = document.querySelectorAll(".dropdown"),
        dropdownList = document.querySelectorAll(".dropdown__list"),
        dropdownLabel = document.querySelectorAll(".dropdown__label"),
        option = document.querySelectorAll(".dropdown__option");

    for (let i = 0; i < dropdownLabel.length; i++) {
        dropdownLabel[i].addEventListener("click", function () {
            dropdownList[i].classList.toggle("dropdown__list--opened");
            dropdownLabel[i].classList.toggle("dropdown__label--active");
        });     
        
        window.addEventListener("click", function (event) {
            let currentDropdown = event.target.closest(".dropdown__label");
    
            if (!currentDropdown || dropdownLabel[i] != currentDropdown) {
                dropdownList[i].classList.remove("dropdown__list--opened");
                dropdownLabel[i].classList.remove("dropdown__label--active");
            }
        });
    }

    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            let value = option[i].getAttribute("data-value");
            let text = option[i].innerText;
            this.closest(".dropdown").querySelector(".dropdown__label").value = value;
            this.closest(".dropdown").querySelector(".dropdown__label").innerText = text;
            this.closest(".dropdown").querySelector(".dropdown__list").classList.remove("dropdown__list--opened");
            this.closest(".dropdown").querySelector(".dropdown__label").classList.remove("dropdown__label--active");
        });
    }

});