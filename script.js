const apiKey = "8564c8560e45f8f80ead8aa9acf89160"; // Get it from openweathermap.org

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                result.innerHTML = "City not found.";
            } else {
                const temp = data.main.temp;
                const condition = data.weather[0].main;
                result.innerHTML = `
          <p><strong>${data.name}</strong></p>
          <p>Temperature: ${temp}°C</p>
          <p>Condition: ${condition}</p>
        `;
            }
        })
        .catch(error => {
            result.innerHTML = "Error fetching weather.";
            console.log(error);
        });
}
