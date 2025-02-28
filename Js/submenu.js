document.addEventListener("DOMContentLoaded", function () {
    var submenuParent = document.querySelector(".submenu-parent");
    var submenu = submenuParent.querySelector(".submenu");

    submenuParent.addEventListener("click", function (event) {

        // Cambia la visibilidad del submenu
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});