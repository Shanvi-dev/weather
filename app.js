//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) { 
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  //provide integer temprature
 
  let minMax = document.getElementById("min-max");
  minMax.innerHTML=`Min-${Math.floor(weather.main.temp_min)}&deg;C/Max-${Math.ceil(weather.main.temp_max)}&deg;C`;

  let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate); if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/6d/df/89/6ddf89a95cc31286387b11c64c1991a8.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/dramatic-sky-picture-id904784522?k=20&m=904784522&s=612x612&w=0&h=2f3RbW9VOWsC99Nu_qB9k01JvmmYGxsPJEaq9YcW6AU=')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/fog-and-clouds-on-mountain-picture-id1160438555?k=20&m=1160438555&s=612x612&w=0&h=nG0zN422VQdSHHX6fLVJEiZNk5gWBwirmiBEFdWqiBE=')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmc0-MOie7cq5yW6s1zRBrz0a93LNQ3Wf8vo7ZBEvo_LubNyYzXEZTCYM-Sb25_J7Qhs8&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://coolthemestores.com/wp-content/uploads/2020/11/winter-snow-feature.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')";
        
    } 
    
}

function dateManage(dateArg)
{
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month}, ${day} ${year}`;
}