const btnsCategory = document.querySelectorAll(".item-category");


btnsCategory.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        const list = document.getElementById(`${element.id}-list`);
        list.classList.add("list-show");

        list.addEventListener("mouseleave", (event) => {
            list.classList.remove("list-show");
        })
    });

    element.addEventListener("mouseleave", (event) => {
        const list = document.getElementById(`${element.id}-list`);
        
        console.log(list);
        if(!list) {
            list.classList.remove("list-show");
        }
    });
});