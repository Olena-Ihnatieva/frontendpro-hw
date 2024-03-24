'use strict'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=CHERKASY&units=metric&APPID=5d066958a60d315387d9492393935c19';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const pressure = data.main.pressure;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Pressure: ${pressure} hPa</p>
                    <p>Description: ${description}</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                    <p>Wind Direction: ${windDirection}°</p>
                    <img src="${iconUrl}" alt="Weather Icon">
                `;
    })
    .catch(error => console.error('Error:', error));

