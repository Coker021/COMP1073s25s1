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

// STEP 5: Add an event listener to the button
getWeatherBtn.addEventListener("click", getWeather);

// STEP 6: Create the getWeather function
async function getWeather() {
    const city = cityInput.value;
    const url = `${baseURL}?q=${city}&appid=${apiKey}&units=metric`;

    // STEP 7: Fetch the weeather data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            // STEP 8: Display the weather data
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            console.log(data);

            const text = document.createElement("p");
            text.textContent = `Temperature: ${temperature} °C, \n 
                                Description: ${description}, \n
                                Humidity: ${humidity}%, \n
                                Wind Speed: ${windSpeed} m/s`;
            weatherResult.appendChild(text);
        })
        .catch(error => {
            // STEP 9: Handle errors
            const errorMessage = document.createElement("p");
            errorMessage.textContent = error.message;
            weatherResult.appendChild(errorMessage);
        });
    console.log("Weather data fetched for city: " + city);


}



   

