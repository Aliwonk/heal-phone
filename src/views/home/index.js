const btnsCategory = document.querySelectorAll(".item-category");


btnsCategory.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        const list = document.getElementById(`${element.id}-list`);
        list.classList.add("list-show");

        list.addEventListener("mouseout", () => {
            list.classList.remove("list-show");
        });
    });
});