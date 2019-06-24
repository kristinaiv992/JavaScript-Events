// 1. get the latitude and longitude from api
window.addEventListener('load', () => {
    let long; 
    let lat;

    let temperatureDescription =  document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/bb90932672ad2660abae9777b26ee0d0/${lat},${long}`;
        
    
        fetch(api)
        .then(response => {
            return response.json()
        })  
        .then(data => {
          console.log(data);
          const {temperature, icon} = data.currently;
          const {summary} = data.daily;
            //set dom elements from the api
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary; //temperatureDescription.textContent = data.daily
            locationTimezone.textContent = data.timezone;
            //set the icon
            setIcons(icon, document.querySelector('.icon'));
            //set the temperture from fahrenheit to celsius
    });

});
     
    }
    

    function setIcons(icon, iconID)
    {
        const skycons = new Skycons({color: "blue"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon])
    }

});