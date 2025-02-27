const apiKey = "97dd7fdf7f88a8581af08a0b8c7a26cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorDiv = document.querySelector(".error"); // Error message

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city === "") {
        errorDiv.style.display = "block";
        errorDiv.innerText = "Please enter a city name.";
        return;
    }
    checkWeather(city);
});

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Set weather icon
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Images/snow.png";
        }

        // Hide error message if city is found
        errorDiv.style.display = "none";

    } catch (error) {
        errorDiv.style.display = "block";
        errorDiv.innerText = "Invalid City Name!";
    }
}

// Auto-load default city
checkWeather("Noakhali");
