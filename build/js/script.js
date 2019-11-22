window.addEventListener("DOMContentLoaded", function() {

    "use strict";
    let dropdown = document.querySelectorAll(".dropdown"),
        dropdownList = document.querySelectorAll(".home__dropdown-list"),
        dropdownLabel = document.querySelectorAll(".home__dropdown-label"),
        option = document.querySelectorAll(".home__option");

            
        for (let i = 0; i < dropdownLabel.length; i++) {
            dropdownLabel[i].addEventListener("click", function() {
                dropdownList[i].classList.toggle("home__dropdown-list--opened");
            });
        }

        // document.addEventListener("click", function(event) {
        //     let target = event.target,
        //         currentDropdown = target.closest(".home__dropdown-label");

        //     for (let i = 0; i < dropdownLabel.length; i++) {
        //         if (!currentDropdown || i != currentDropdown) {
        //             dropdown.classList.remove("home__dropdown-list--opened");
        //         }
        //     }


        //     dropdownLabel.forEach((item) => {
        //         if (!currentDropdown || item != currentDropdown) {
        //             item.classList.remove("home__dropdown-list--opened");
        //         }
        //     });
        // });

        function selectOption() {
            for (let i = 0; i < option.length; i++) {
                option[i].addEventListener("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    let value = option[i].getAttribute("data-value");
                    let text = option[i].innerText;
                    this.closest(".home__dropdown-label").value = value;
                    this.closest(".home__dropdown-label").innerText = text;
                    this.closest(".home__dropdown-list").classList.remove("home__dropdown-list--opened");
                });
            }
        }

        selectOption();
        
    
                
        // option.forEach((item) => {
        //     item.addEventListener("click", function(event) {
        //         event.preventDefault();
        //         event.stopPropagation();
        //         let value = this.getAttribute("data-value");
        //         let text = this.innerText;
        //         this.closest(".home__dropdown-label").value = value;
        //         this.closest(".home__dropdown-label").innerText = text;
        //         this.closest(".home__dropdown-list").classList.remove("home__dropdown-list--opened");
        //     });
        // });
    
            
});