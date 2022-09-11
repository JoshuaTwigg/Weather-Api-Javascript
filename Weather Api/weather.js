let searchBar = document.querySelector(".search-bar").value  
let button = document.getElementById("button")
let icon = document.querySelector(".icon")


let data = {
    apiKey: '169256dd7405ffa9d7394c68847e621d',

    fetchWeather: function(city = "capetown"){                       // need a defualt value if nothing is added to search bar or if statement check whcih is tedious
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + city + "&units=metric&appid="
        + this.apiKey)
            .then(response => response.json())//return object as a json text
            .then(data =>display(data))
        
        
            
    },

  
}


function display(data){
    let name = data.name
    let temperature = data.main.temp
    let humidity = data.main.humidity
    let weather = data.weather[0].description
    let iconSymbol = data.weather[0].icon
    let wind = data.wind.speed


    console.log(name)
    console.log(weather)
    console.log(temperature)

    let heading = document.querySelector(".card-title")
    let temp = document.querySelector(".temperature")
    let desc = document.querySelector(".description")
    let humid = document.querySelector(".humidity")
    let win = document.querySelector(".wind")

    heading.innerHTML = "weather in" + '' + "&nbsp" + name;
    temp.innerHTML = temperature + "C";
    icon.src = "http://openweathermap.org/img/w/" + iconSymbol + ".png"
    desc.innerHTML = weather + icon;
    humid.innerHTML =humidity + "&nbsp" + "Humidity";
    win.innerHTML = "wind speed: "+ wind + "&nbsp" + "meter/sec" ;



    
}

function search(){
    data.fetchWeather(document.querySelector(".search-bar").value  )
   
}


button.addEventListener("click",function(){
   
    search()
})



// if api not logging remmeber to actually call the function

//https://api.openweathermap.org/data/2.5/weather?q=%20cape%20town%20&units%20=%20metric%20&appid=169256dd7405ffa9d7394c68847e621d

//"http://openweathermap.org/img/w/" + iconcode + ".png";