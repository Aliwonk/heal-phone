const listBid = document.getElementById("list-bid");
const btnExit = document.getElementById("btn-exit");

btnExit.addEventListener("click", (event) => {
    document.cookie = "login=;path=/admin;";
    document.cookie = "password=;path=/admin;";
    document.location.href = "/";
});

fetch("/admin/devices")
    .then(res => res.json())
    .then(data => {
        if (data.data.length > 0) {

            for (let i = 0; i < data.data.length; i++) {
                const item = document.createElement("div");
                const brand = document.createElement("div");
                const reason = document.createElement("div");
                const name = document.createElement("div");
                const phone = document.createElement("div");

                item.classList.add("item");

                brand.textContent = data.data[i].brand;
                item.appendChild(brand);


                switch (data.data[i].reason) {
                    case "DISPLAY":
                        reason.textContent = "Замена экрана";
                        break;
                    case "BATTERY":
                        reason.textContent = "Замена батареи";
                        break;
                    case "":
                        reason.textContent = "Ремонт полсе воды";
                        break;
                }

                item.appendChild(reason);

                name.textContent = data.data[i].client.name;
                item.appendChild(name);

                phone.textContent = data.data[i].client.phone_number;
                item.appendChild(phone);

                listBid.appendChild(item);
            }

            console.log(data.data);
        }
    });