function toggleAttachMenu() {
            var menu = document.getElementById("attachMenu")
            if (menu.style.display === "none" || menu.style.display === "" ) {
                menu.style.display =  "block";
} else {
    menu.style.display = "none";
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-ellipse-v')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropDown.classList.contains('active')) {
                openDropown.classList.remove('active');
            }
        }
    }
}
        

