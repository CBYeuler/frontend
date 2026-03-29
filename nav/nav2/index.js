const col = document.querySelector(".collapsible");

col.addEventListener("click", function() {
    const content = this.nextElementSibiling;
    content.classList.toggle("active");
});
