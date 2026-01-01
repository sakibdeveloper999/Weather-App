```md
# 🌦️ Weather App

A responsive and user-friendly weather application that fetches and displays real-time weather information for any city using the **OpenWeatherMap API**. Built with **HTML, CSS, and Vanilla JavaScript**, this project demonstrates API integration, asynchronous JavaScript, clean UI design, and responsive layouts.

---

## 🔗 Repository Link
https://github.com/sakibdeveloper999/Weather-App

---

## 📌 Features

- 🔍 Search the weather by city name  
- 🌡️ Displays current temperature (°C)  
- 💧 Shows humidity percentage  
- 🌬️ Shows wind speed  
- 🎨 Dynamic weather icons based on weather conditions  
- ❌ Error handling for invalid or empty city input  
- 📱 Fully responsive design for mobile, tablet, and desktop  
- ⚡ Fast and lightweight (no frameworks used)

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure  
- **CSS3** – Flexbox, gradients, media queries  
- **JavaScript (ES6+)** – DOM manipulation, async/await, Fetch API  
- **OpenWeatherMap API** – Real-time weather data  

---

## 📂 Project Structure

```

Weather-App/
│
├── index.html        # Main HTML file
├── style.css         # Styling and responsive design
├── script.js         # JavaScript logic & API handling
├── Images/           # Weather and UI icons
│   ├── clear.png
│   ├── clouds.png
│   ├── rain.png
│   ├── drizzle.png
│   ├── mist.png
│   ├── snow.png
│   ├── humidity.png
│   ├── windsd.png
│   └── search.png
└── README.md         # Project documentation

````

---

## ⚙️ How the Application Works

1. The user enters a city name in the search input
2. The app sends a request to the OpenWeatherMap API
3. Weather data is fetched asynchronously using `fetch` and `async/await`
4. The UI updates dynamically with:
   - City name
   - Temperature
   - Humidity
   - Wind speed
   - Weather icon
5. If the city name is invalid, an error message is displayed

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sakibdeveloper999/Weather-App.git
````

### 2️⃣ Navigate to the Project Folder

```bash
cd Weather-App
```

### 3️⃣ Run the Project

Open `index.html` in your browser.

---

## 🔑 API Configuration

This project uses the **OpenWeatherMap API**.

1. Create a free account at:
   [https://openweathermap.org/api](https://openweathermap.org/api)
2. Generate your API key
3. Replace the API key in `script.js`:

```js
const apiKey = "YOUR_API_KEY";
```

---

## ⚠️ Notes

* Wind speed provided by the API is in **m/s**
* API key is exposed in client-side JavaScript (acceptable for learning projects, not production)

---

## 📈 Future Improvements

* Convert wind speed from m/s to km/h
* Add loading spinner while fetching data
* Enable search using the Enter key
* Save last searched city using `localStorage`
* Add 5-day weather forecast
* Improve accessibility (ARIA labels, better contrast)
* Add dark/light mode toggle

---

## 👨‍💻 Author

**Md. Sakib**

* GitHub: [https://github.com/sakibdeveloper999](https://github.com/sakibdeveloper999)
* Linktree: [https://linktr.ee/sakibdeveloper](https://linktr.ee/sakibdeveloper)

---

## 📄 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this project.

---

⭐ If you like this project, consider giving it a star on GitHub!

```
```
