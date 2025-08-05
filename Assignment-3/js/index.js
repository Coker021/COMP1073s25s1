// BASE URL: "https://api.openweathermap.org"

// STEP 1: Store the API configuration
// STEP 2: Set the base URL for the OpenWeatherMap API
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

// STEP 3: Set your API key
const apiKey = "b5da509689f5c4f193d5d8ae4c6dbe08";

// STEP 4: Define the HTML elements needed for interaction
// These elements will be used to get user input and display results
const cityInput  = document.getElementById("city");
const getWeatherBtn = document.getElementById("get-weather");
const weatherResult = document.getElementById("weather-result");
const weatherIcon = document.getElementById("weather-icon");
const weatherArea = document.getElementById("weather-area");

// STEP 5: Add an event listener to the button
getWeatherBtn.addEventListener("click", getWeather);

// STEP 6: Create the getWeather function
async function getWeather() {
    const city = cityInput.value;
    const url = `${baseURL}?q=${city}&appid=${apiKey}&units=metric`;

    // STEP 7: Fetch the weather data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // STEP 8: Display the weather data
                const cityWeather = `Weather in ${data.name}`;
                const temperature = data.main.temp;
                const temp_max = data.main.temp_max;
                const temp_min = data.main.temp_min;
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                const pressure = data.main.pressure;
                const visibility = data.visibility;
                const wind = data.wind.speed;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const timeZone = data.timezone;
                const sunrise = data.sys.sunrise;
                const sunset = data.sys.sunset;
                const percentClouds = data.clouds.all;
                const percentRain = data.rain ? data.rain["1h"] : 0;
                const percentSnow = data.snow ? data.snow["1h"] : 0;
            console.log(data);

            // STEP 10a: Add an image based on the weather type
            displayWeatherIcon(data.weather[0].main);
            const text = document.createElement("h1");
            const text1 = document.createElement("p");
            const text2 = document.createElement("p");
            const text3 = document.createElement("p");
            const text4 = document.createElement("p");
            const text5 = document.createElement("p");
            const text6 = document.createElement("p");
            const text7 = document.createElement("p");
            const text8 = document.createElement("p");
            const text9 = document.createElement("p");
            const text10 = document.createElement("p");
            const text11 = document.createElement("p");
            const text12 = document.createElement("p");
            const text13 = document.createElement("p");
            const text14 = document.createElement("p");
            const text15 = document.createElement("p");
            const text16 = document.createElement("p");


            text.textContent = cityWeather;
            text1.textContent = "Temperature: " + temperature + " °C";
            text2.textContent = "Max Temp: " + temp_max + " °C";
            text3.textContent = "Min Temp: " + temp_min + " °C";
            text4.textContent = "Description: " + description;
            text5.textContent = "Icon: " + icon;
            text6.textContent = "Pressure: " + pressure + " hPa";
            text7.textContent = "Visibility: " + visibility + " m";
            text8.textContent = "Wind: " + wind + " m/s";
            text9.textContent = "Humidity: " + humidity + "%";
            text10.textContent = "Wind Speed: " + windSpeed + " m/s";
            text11.textContent = "Time Zone: " + timeZone + " seconds from UTC";
            text12.textContent = "Sunrise: " + new Date(sunrise * 1000).toLocaleTimeString() + " (local time)";
            text13.textContent = "Sunset: " + new Date(sunset * 1000).toLocaleTimeString() + " (local time)";
            text14.textContent = "Cloudiness: " + percentClouds + "%";
            text15.textContent = "Rain (last 1h): " + (percentRain ? percentRain + " mm" : "0 mm");
            text16.textContent = "Snow (last 1h): " + (percentSnow ? percentSnow + " mm" : "0 mm");

            weatherArea.appendChild(text);
            weatherResult.appendChild(text1);
            weatherResult.appendChild(text2);
            weatherResult.appendChild(text3);
            weatherResult.appendChild(text4);
            weatherResult.appendChild(text5);
            weatherResult.appendChild(text6);
            weatherResult.appendChild(text7);
            weatherResult.appendChild(text8);
            weatherResult.appendChild(text9);
            weatherResult.appendChild(text10);
            weatherResult.appendChild(text11);
            weatherResult.appendChild(text12);
            weatherResult.appendChild(text13);
            weatherResult.appendChild(text14);
            weatherResult.appendChild(text15);
            weatherResult.appendChild(text16);

            console.log("Weather data fetched for city: " + city);
            cityInput.value = ""; // Clear the input field after fetching
        }
        })
        .catch(error => {
            // STEP 9: Handle errors
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error.message;
            weatherResult.appendChild(errorMessage);
            cityInput.value = ""; // Clear the input field after error
        });
        weatherResult.innerHTML = ""; // Clear previous results
        weatherIcon.innerHTML = ""; // Clear previous icon
        weatherArea.innerHTML = ""; // Clear previous area
        
}

// STEP 10: Add Image Display for type of weather
function displayWeatherIcon(weatherType) {
    const weatherDisplay = document.createElement("img");
    switch(weatherType) {
        case "Clear":
            weatherDisplay.setAttribute("src", "img/sun.png");
            break;
        case "Clouds":
            weatherDisplay.setAttribute("src", "img/cloud.png");
            break;
        case "Rain":
            weatherDisplay.setAttribute("src", "img/rain.png");
            break;
        case "Snow":
            weatherDisplay.setAttribute("src", "img/snow.png");
            break;
        default:
            weatherDisplay.setAttribute("src", "img/weather.png");
    }
    weatherIcon.appendChild(weatherDisplay);
}

