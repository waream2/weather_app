import { getWeatherData } from '/src/getWeather.js'
import  { createWeatherReport } from '/src/weatherReport.js'

let createHeaderModule = (function () {

    function createHeader() {
        let content = document.getElementById('content');
        let headerContainer = document.createElement('div')
            headerContainer.setAttribute('id','header-container')
            content.appendChild(headerContainer)
        let headerLeftContainer=document.createElement('div')
            headerLeftContainer.className='header-left-right-container'
            headerContainer.appendChild(headerLeftContainer)
        let title = document.createElement('h1')
            title.classList='title'
            title.textContent = 'Get Weather'
            headerLeftContainer.appendChild(title)
        let searchCopy=document.createElement('h3')
            searchCopy.classList = 'search-box-header'
            searchCopy.textContent = 'Enter Zip Code'
            headerLeftContainer.appendChild(searchCopy)
        let searchContainer=document.createElement('div')
            searchContainer.className='search-container'
            headerLeftContainer.appendChild(searchContainer)
        let searchInput=document.createElement('input')
            searchInput.className='search-input'
            searchInput.setAttribute('pattern',"^[0-9]{5}(?:-[0-9]{4})?$")
            searchInput.required = true;
            searchContainer.appendChild(searchInput)
        let formErrorMessage=document.createElement('div')
            formErrorMessage.className = 'error-message'
            formErrorMessage.textContent = ''
            headerLeftContainer.appendChild(formErrorMessage)
        let searchButton=document.createElement('button')
            searchButton.classList='search-button'
            searchButton.textContent='>'
            searchContainer.appendChild(searchButton)
        
        let headerRightContainer=document.createElement('div')
            headerRightContainer.className='header-right-left-container'
            headerContainer.appendChild(headerRightContainer)
        let headerIcon = document.createElement('img')
            headerIcon.src='./dist/headericon.png'
            headerIcon.className='header-icon'
            headerRightContainer.appendChild(headerIcon)
    
            searchButton.addEventListener('click', (e) => {

                
                var oldWeatherReport = document.querySelector(".weather-report-container");
                if(typeof(oldWeatherReport) != 'undefined' && oldWeatherReport != null){
                    content.removeChild(oldWeatherReport)
                    sendData();
                } else{
                    sendData();
                }
                searchInput.value=''
            })
        
            let sendData = async function() {
                showFormError();
                if (searchInput.validity.valid) {
                    let tryThis = await getWeatherData.getWeather(searchInput.value);
                    let thenThis = await createWeatherReport.createWeatherReportComponent(tryThis['name'],tryThis['weather'][0]['icon'],tryThis['weather'][0]['description'],tryThis['main']['temp'],tryThis['main']['feels_like'],tryThis['main']['temp_min'],tryThis['main']['temp_max'])
                }
            } 

        function showFormError() {
            if (searchInput.validity.valid) {
                formErrorMessage.textContent=''
            }
            else if (searchInput.validity.valueMissing) {
                formErrorMessage.textContent = 'This is a required field'
            }
            else if (searchInput.validity.patternMismatch) {
                formErrorMessage.textContent = 'Must be 5 digits'
            }
        }
    }

    function createWeatherReportComponent(city, tempature, feelslike, low, high){
        let content=document.getElementById('content')
        let weatherReportContainer=document.createElement('div')
            weatherReportContainer.className='weather-report-container'
            content.appendChild(weatherReportContainer)
        let cityHeader=document.createElement('h1')
            cityHeader.textContent = city
            weatherReportContainer.appendChild(cityHeader)
    }



   
;
 
return { createHeader, createWeatherReportComponent }

}());

export { createHeaderModule }

