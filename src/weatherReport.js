import { getWeatherData } from '/src/getWeather.js'

let createWeatherReport = (function () {

    function createWeatherReportComponent(city, icon, description, currentTemp, feelslike, low, high){
        let content=document.getElementById('content')
        let weatherReportContainer=document.createElement('div')
            weatherReportContainer.className='weather-report-container'
            content.appendChild(weatherReportContainer)
        let cityHeader=document.createElement('h1')
            cityHeader.className='city-header'
            cityHeader.textContent = city
            weatherReportContainer.appendChild(cityHeader)
        let weatherIcon=document.createElement('img')
            weatherIcon.className='weather-icon'
            weatherIcon.src='http://openweathermap.org/img/wn/'+icon+'@2x.png'
            weatherReportContainer.appendChild(weatherIcon)
        let weatherDescription=document.createElement('h2')
            weatherDescription.className= 'temp-data'
            weatherDescription.textContent=description.toUpperCase()
            weatherReportContainer.appendChild(weatherDescription)
        let temperature=document.createElement('h3')
            temperature.className= 'temp-data'
            temperature.textContent = 'Temperature: ' + Math.round(currentTemp) + '°'
            weatherReportContainer.appendChild(temperature)
        let feelsLikeTemp=document.createElement('h3')
            feelsLikeTemp.className= 'temp-data'
            feelsLikeTemp.textContent = 'Feels Like: ' + Math.round(feelslike) + '°'
            weatherReportContainer.appendChild(feelsLikeTemp)
        let minMax=document.createElement('h3')
            minMax.className= 'temp-data'
            minMax.textContent = 'Low Temp: ' + Math.round(low) + '° ' + 'High Temp: ' + Math.round(high) + '°'
            weatherReportContainer.appendChild(minMax)


       
    }

    return { createWeatherReportComponent }
}());

export { createWeatherReport } 