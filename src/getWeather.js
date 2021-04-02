let getWeatherData = (function () {
    async function getWeather(zip) {
        try {
            let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=9f2b95e435dab1c30dd5b0d61dd89876&units=imperial
            `)
            let weatherDataReturn = await weatherData.json();
            console.log(weatherDataReturn)
            return  weatherDataReturn   
        }
        catch(err){
            alert(err)
        }
    // return weatherDataReturn   
    };
    return { getWeather }
}())
export { getWeatherData }