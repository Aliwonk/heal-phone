const btnForm = document.getElementById("btn-form");
const btnModal = document.getElementById("btn-modal");
const btnAdmin = document.getElementById("btn-admin");
const nameUser = document.getElementById("name");
const phoneNumber = document.getElementById("phone-number");
const brand = document.getElementById("brand");
const reason = document.getElementById("reason");
const nameModal = document.getElementById("modal-name");
const phoneModal = document.getElementById("modal-phone");

function validatePhone(phone) {
    const regex = /^(\+7|8)[\s(-]*(\(\d{3}\)|\d{3})[\s)-]*\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return regex.test(phone);
}

btnAdmin.addEventListener("click", (event) => document.location.href = "/admin");

btnForm.addEventListener("click", async (event) => {
    event.preventDefault();

    if (!validatePhone(phoneNumber.value)) return alert("Неправильный формат телефона");

    const response = await fetch("http://localhost:3000/bid", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameUser.value,
            phone: phoneNumber.value
        })
    });
    const data = await response.json();
    if (response.status == 201) alert("Заявка принята");
    if (response.status == 400 && data.message === "Телефон существует") alert("Заявка существует");
});

btnModal.addEventListener("click", async (event) => {
    event.preventDefault();

    if (!validatePhone(phoneModal.value)) return alert("Неправильный формат телефона");
    const response = await fetch("http://localhost:3000/record", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            brand: brand.value,
            reason: reason.value,
            name: nameModal.value,
            phone: phoneModal.value
        })
    });

    const data = await response.json();
    if (response.status == 201) alert("Заявка принята");
    console.log(data);
});

const modals = document.querySelectorAll('.modal');
const successModal = document.getElementById('success-modal');
const serviceButtons = document.querySelectorAll('.item-service button');
const bidForm = document.forms.bid;

serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal').style.display = 'block';
    });
});


bidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bidForm.reset();
    successModal.style.display = 'block';
});


document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('modal').style.display = 'none';
    successModal.style.display = 'block';
    e.target.reset();
});

modals.forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

