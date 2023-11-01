document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll("tbody tr");
    const headerCheckbox = document.querySelector("thead th input[type='checkbox']");
    const checkboxes = document.querySelectorAll("tbody td input[type='checkbox']");

    for (let i = 0; i < rows.length; i++) {
        
        
        rows[i].addEventListener("mouseover", function() {
            this.classList.add("hovered");
            this.style.cursor = "pointer";
        });

        
        rows[i].addEventListener("mouseout", function() {
            this.classList.remove("hovered");
            this.style.cursor = "default";
        });

        
        rows[i].addEventListener("click", function(event) {
            if (event.target.tagName.toLowerCase() !== "input") {
                const checkbox = this.querySelector("input[type='checkbox']");
                checkbox.checked = !checkbox.checked;
                handleCheckboxChange(checkbox);
            }
        });
    }

    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            handleCheckboxChange(this);
        });
    });

   
    headerCheckbox.addEventListener("change", function() {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = headerCheckbox.checked;
            handleCheckboxChange(checkbox);
        });
    });

   
    function handleCheckboxChange(checkbox) {
        const row = checkbox.closest("tr");
        if (checkbox.checked) {
            row.classList.add("selected");
            row.style.backgroundColor = "yellow";

        } else {
            row.classList.remove("selected");
            const index = Array.from(checkboxes).indexOf(checkbox);
            row.style.backgroundColor = index % 2 === 0 ? "#f2f2f2" : "white";
        }

        const rowsSelected = document.getElementsByClassName("selected");

        if (checkboxes.length === rowsSelected.length) {
            headerCheckbox.checked = true;
        }


    }

});