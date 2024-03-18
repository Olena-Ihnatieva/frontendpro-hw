const cosmetics = {
    'Обличчя': [{
        name: 'Ревіталайзер',
        info: 'Підходить для всих типів шкіри - 500 грн',
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
        info: 'Шовковісте волосся - 500 грн',
    }],
};

const categories = document.querySelector('#categories');
const products = document.querySelector('#products');
const info = document.querySelector('#info');

//Відображення категорій
Object.keys(cosmetics).forEach((categoryName) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    categoryDiv.textContent = categoryName;

    categoryDiv.addEventListener('click', () => {
        displayProducts(categoryName);
    });

    categories.appendChild(categoryDiv);
});

//Відображення продуктів
function displayProducts(categoryName) {
    products.innerHTML = '';
    info.innerHTML = '';

    cosmetics[categoryName].forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.textContent = product.name;
        products.appendChild(productDiv);

        productDiv.addEventListener('click', () => {
            displayAbout(product);
        });
    });
}

//Відображення інфи та кнопки
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
        alert('Товар куплений');
        location.reload();
    });

    productInfoDiv.append(aboutDiv, buyProduct);
    info.appendChild(productInfoDiv);
}