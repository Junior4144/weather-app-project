
// location 
function weatherObject(condition, description, minTemp, maxTemp) {
    this.condition = condition;
    this.description = description;
    this.minTemp = minTemp;
    this.maxTemp =maxTemp;

    
}


async function fetchData(location){
    //location == 'Houston'
    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DJ7YDUHEMTWA4FZ69Y6YLHXM6`)
    const data = await weatherData.json();
    //console.log(data);

    const condition = data.days[0].conditions;
    const description = data.days[0].description;
    const minTemp =  data.days[0].tempmin;
    const maxTemp = data.days[0].tempmax;

    const obj = new weatherObject(condition, description, minTemp, maxTemp);
    
}
// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const location = document.querySelector('input').value
//     fetchData(location);
// });

//fetchData("houston");

//today weather - temp -

//Todays Weather:
    //conditions: 'clear;
    //description": "Clear conditions throughout the day.",
    //"tempmax": 45.9,
    //"tempmin": 30.2,    


//Tommarrow Weather
    //conditions: 'clear;
    //description": "Clear conditions throughout the day.",
    //"tempmax": 45.9,
    //"tempmin": 30.2,    
