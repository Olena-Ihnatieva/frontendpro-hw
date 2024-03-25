'use strict'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=CHERKASY&units=metric&APPID=5d066958a60d315387d9492393935c19';

fetch(url)
    .then(response => response.json())
    .then(data => {
            const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Pressure: ${data.main.pressure} hPa</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Wind Direction: ${data.wind.deg}°</p>
                    <img src="${iconUrl}" alt="Weather Icon">
                `;
    })
    .catch(error => console.error('Error:', error));
