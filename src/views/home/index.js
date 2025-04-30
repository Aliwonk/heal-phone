const btnForm = document.getElementById("btn-form");
const nameUser = document.getElementById("name");
const phoneNumber = document.getElementById("phone-number");

btnForm.addEventListener("click", (event) => {
    event.preventDefault();

});

// Модальные окна
const modals = document.querySelectorAll('.modal');
const successModal = document.getElementById('success-modal');
const serviceButtons = document.querySelectorAll('.item-service button');
const bidForm = document.forms.bid;

// Открытие модалки при клике на кнопки услуг
serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal').style.display = 'block';
    });
});

// Отправка основной формы
bidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bidForm.reset();
    successModal.style.display = 'block';
});

// Отправка модальной формы
document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('modal').style.display = 'none';
    successModal.style.display = 'block';
    e.target.reset();
});

// Закрытие модалок
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

