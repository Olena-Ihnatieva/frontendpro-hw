'use strict'

const cosmetics = {
    'Обличчя': [{
        name: 'Ревіталайзер',
        info: 'Підходить для всіх типів шкіри - 500 грн',
    }, {
        name: 'Ензимна пудра для обличчя',
        info: 'Умивалка - 400 грн',
    }, {
        name: 'Детокс маска',
        info: 'Нічна маска для омолодження - 550 грн',
    }],
    'Тіло': [{
        name: 'Молочко для очищення тіла',
        info: 'Оновлена версія гелю - 380 грн',
    }, {
        name: 'Скраб для тіла',
        info: 'Очищує та тонізує - 450 грн',
    }, {
        name: 'Лосьйон для тіла',
        info: 'Ніжна шкіра - 350 грн',
    }],
    'Волосся': [{
        name: 'Пілінг для шкіри голови',
        info: 'Корисна штука - 510 грн',
    }, {
        name: 'Твердий шампунь "Ментол"',
        info: 'Найкращий варіан для подорожей - 400 грн',
    }, {
        name: 'Бальзам-маска для волосся',
        info: 'Шовковисте волосся - 500 грн',
    }],
};

const categories = document.querySelector('#categories');
const products = document.querySelector('#products');
const info = document.querySelector('#info');
const formOrder = document.querySelector('#form-order');
let myProduct;

const ukraineCities = [
    'Вінниця', 'Дніпро', 'Донецьк', 'Житомир', 'Запоріжжя',
    'Івано-Франківськ', 'Кам\'янець-Подільський', 'Київ',
    'Кременчук', 'Кривий Ріг', 'Кропивницький', 'Луганськ',
    'Луцьк', 'Львів', 'Маріуполь', 'Миколаїв', 'Одеса', 'Полтава',
    'Рівне', 'Севастополь', 'Сімферополь', 'Суми', 'Тернопіль',
    'Ужгород', 'Харків', 'Херсон', 'Хмельницький', 'Черкаси', 'Чернівці', 'Чернігів'
];

const fullNameInput = document.querySelector('#fullName');
const citySelect = document.querySelector('#city');
const deliverySelect = document.querySelector('#delivery');
const paymentSelect = document.querySelector('#payment');
const quantitySelect = document.querySelector('#quantity');
const messageTextarea = document.querySelector('#message');
const checkoutBtn = document.querySelector('.checkoutBtn');
const reviewOrder = document.querySelector('#review-order');

//Список категорій
function displayCategories() {
    Object.keys(cosmetics).forEach((categoryName) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.textContent = categoryName;
        categoryDiv.addEventListener('click', () => {
            displayProducts(categoryName);
        });

        categories.appendChild(categoryDiv);
    });
}

// Список товарів
function displayProducts(categoryName) {
    products.innerHTML = '';
    info.innerHTML = '';

    cosmetics[categoryName].forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.textContent = product.name;
        productDiv.addEventListener('click', () => {
            displayAbout(product);
        });

        products.appendChild(productDiv);
    });
}

//Інформація про продукт
function displayAbout(product) {
    info.innerHTML = '';

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');
    aboutDiv.textContent = `${product.info}`;

    const buyProduct = document.createElement('div');
    buyProduct.classList.add('button');
    buyProduct.textContent = 'Купити';
    buyProduct.addEventListener('click', () => {
        myProduct = product;
        showForm();
    });

    productInfoDiv.append(aboutDiv, buyProduct);
    info.appendChild(productInfoDiv);
}

function showForm() {
    formOrder.style.display = 'flex';
}

// Приховування форми
function hideForm() {
    formOrder.style.display = 'none';
}

// Відображення замовлення
function displayOrder(order, product) {
    hideForm();

    reviewOrder.style.display = 'flex';
    reviewOrder.innerHTML = `
        <p><strong>Товар:</strong> ${product.name}</p>
        <p><strong>Інформація про товар:</strong> ${product.info}</p>
        <p><strong>ФИО:</strong> ${order.fullName}</p>
        <p><strong>Город:</strong> ${order.city}</p>
        <p><strong>Отделение Новой Почты:</strong> ${order.delivery}</p>
        <p><strong>Оплата:</strong> ${order.payment}</p>
        <p><strong>Количество:</strong> ${order.quantity}</p>
        <p><strong>Комментарий к заказу:</strong> ${order.message}</p>
        <div id="reviewBtn" class="review-btn">Все вірно</div>
    `;

    const reviewBtn = document.querySelector('#reviewBtn');
    reviewBtn.addEventListener('click', () => {
        location.reload();
    });
}

// Відправлення замовлення
checkoutBtn.addEventListener('click', () => {
    if (!fullNameInput.value || !citySelect.value || !paymentSelect.value || !quantitySelect.value) {
        alert('Будь ласка, заповніть обов\'язкові поля');
        return;
    }

    const order = {
        fullName: fullNameInput.value,
        city: citySelect.value,
        delivery: deliverySelect.value,
        payment: paymentSelect.value,
        quantity: quantitySelect.value,
        message: messageTextarea.value,
    };

    displayOrder(order, myProduct);
});

// Заповнення списку міст
ukraineCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.text = city;

    citySelect.appendChild(option);
});

// Ініціалізація
displayCategories();
hideForm();






