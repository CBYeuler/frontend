const col = document.querySelector(".collapsible");

col.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.classList.toggle("active");
});