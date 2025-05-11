document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".catalog-toggle");
  const submenu = document.querySelector(".submenu");
  toggleButton.addEventListener("click", function (e) {
    submenu.classList.toggle("show");
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu-item")) {
      submenu.classList.remove("show");
    }
  });
});
document.querySelector(".catalog-toggle").addEventListener("click", () => {
  document.querySelector(".catalog-dropdown").classList.toggle("show");
});
