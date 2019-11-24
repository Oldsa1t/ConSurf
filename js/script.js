window.addEventListener("DOMContentLoaded", function () {

    "use strict";
    let dropdown = document.querySelectorAll(".dropdown"),
        dropdownList = document.querySelectorAll(".home__dropdown-list"),
        dropdownLabel = document.querySelectorAll(".home__dropdown-label"),
        option = document.querySelectorAll(".home__option");

    for (let i = 0; i < dropdownLabel.length; i++) {
        dropdownLabel[i].addEventListener("click", function () {
            dropdownList[i].classList.toggle("home__dropdown-list--opened");
        });     
        
        window.addEventListener("click", function (event) {
            let currentDropdown = event.target.closest(".home__dropdown-label");
    
            if (!currentDropdown || dropdownLabel[i] != currentDropdown) {
                dropdownList[i].classList.remove("home__dropdown-list--opened");
            }
        });
    }

    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            let value = option[i].getAttribute("data-value");
            let text = option[i].innerText;
            this.closest(".dropdown").querySelector(".home__dropdown-label").value = value;
            this.closest(".dropdown").querySelector(".home__dropdown-label").innerText = text;
            this.closest(".dropdown").querySelector(".home__dropdown-list").classList.remove("home__dropdown-list--opened");
        });
    }

});