'use strict'

//Вік
const birthYear = prompt('Введіть рік народження:');
if (birthYear === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження.');
} else {
    // Місто
    const city = prompt('Введіть місто, де ви живете:');
    if (city === null) {
        alert('Шкода, що Ви не захотіли ввести своє місто.');
    } else {
        // Спорт
        const favoriteSport = prompt('Введіть ваш улюблений вид спорту:');
        if (favoriteSport === null) {
            alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        } else {
            // Підрахунок віку
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;

            // Інфо
            let message = `Ваш вік: ${age}\n`;
            if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
                message += `Ти живеш у столиці ${getCapitalCountry(city)}, в місті ${city}.`;
            } else {
                message += `Ти живеш у місті ${city}.`;
            }

            // Чемпіони
            const sportsChampions = {
                'бокс': 'Майк Тайсон',
                'футбол': 'Килиан Мбаппе',
                'гольф': 'Дастин Джонсон',
            };
            if (sportsChampions[favoriteSport.toLowerCase()]) {
                message += `\nКруто! Хочеш стати як ${sportsChampions[favoriteSport.toLowerCase()]}?`;
            }

            alert(message);
        }
    }
}

function getCapitalCountry(city) {
    switch (city) {
        case 'Київ':
            return 'України';
        case 'Вашингтон':
            return 'США';
        case 'Лондон':
            return 'Великої Британії';
        default:
            return 'невідомої країни';
    }
}
