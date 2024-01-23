const inputName = document.querySelector(".input");
const btnName = document.querySelector(".btn");
const tempName = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const percentge = document.querySelector(".perc");
const cloudName = document.querySelector(".cloud");
const windName = document.querySelector(".wind");
const kiloName = document.querySelector(".kilo");


const apiKey = "4135c251b30f8bcf18f9e706af312056";
function getWeather(value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`)
    .then(response =>{
        return response.json();
    }).then((data) => {
        console.log(data);
       let temperature =  tempName.innerHTML = `${data.main.temp}°C`;
       let city = cityName.innerHTML = `${data.name}`;
       let percentage = percentge.innerHTML = `${data.main.humidity}%`;
       let cloud = cloudName.innerHTML = `${data.weather[0].main}`;
       let wind = windName.innerHTML = `${data.wind.speed}m/s`;
       let kilo = kiloName.innerHTML = `${data.main.pressure}hPa`;

       tempName.textContent = temperature;
       cityName.textContent = city;
       percentge.textContent = percentage;
       cloudName.textContent = cloud;
       windName.textContent = wind;
       kiloName.textContent = kilo;


    }).catch((err) =>{
        console.log(err);
    })
}

btnName.addEventListener("click", () =>{
    let weather = inputName.value;
    getWeather(weather);
    inputName.value = "";
})
