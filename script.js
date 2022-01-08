// GLOBAL VARIABLES
var searchFormEl = document.querySelector("#searchForm");
var citySearch = document.querySelector("#citySearch");
var currentCityEl = document.getElementById("currentCity");
var currentWeatherEl = document.getElementById("currentWeather");
var fiveDayEl= document.querySelector(".fiveDay");
var cityListEl = document.getElementById("cityList");
var cityListArr = JSON.parse(localStorage.getItem("cityList")) || [];

var formSubmitHandler = function(event){
    event.preventDefault();
    var city= citySearch.value.trim();

    if(city){
        getCurrentWeth(city);
        cityList(city);
        citySearch.value="";
    }else{
        alert("Please enter a City name");
    }
}

var cityList = function(city){
    if(cityListArr.includes(city)===false){
        var cityBtn = document.createElement("button");
        cityBtn.classList.add("m-1", "cityBtn", "bg-gradient")
        cityBtn.textContent = city;
    
        cityListEl.append(cityBtn);
        cityListArr.push(city);
        localStorage.setItem("cityList", JSON.stringify(cityListArr));
        console.log(cityListArr);
    };
};

console.log(cityListArr);
var displayCityList = function(){
    for(var i=0; i<cityListArr.length; i++){
        var cityBtn = document.createElement("button");
        cityBtn.classList.add("m-1", "cityBtn", "bg-gradient");
        cityBtn.textContent = cityListArr[i];

        cityListEl.append(cityBtn)
    }
}

