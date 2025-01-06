
// location 
function weatherObject(date, description, minTemp, maxTemp) {
    this.date = date;
    this.description = description;
    this.minTemp = minTemp;
    this.maxTemp =maxTemp;
    

    
}
function addDataToPage(arr){

    const info_container = document.querySelector('.info-container');
    info_container.style.visibility = "visible";

    arr.forEach(day => {
        const card = document.createElement('div');
        card.classList.add("card")

        const date_container = document.createElement('div');
        date_container.classList.add('date-container')

        const card_date_title = document.createElement('div');
        card_date_title.classList.add('card-title');
        card_date_title.textContent = `Date: `

        const card_date = document.createElement('div');
        card_date.classList.add('card-date');
        card_date.textContent = `${day.date}`

        date_container.appendChild(card_date_title)
        date_container.appendChild(card_date)


        const description_container = document.createElement('div');
        description_container.classList.add('description-container');

        const card_description_title = document.createElement('div');
        card_description_title.classList.add('card-title');
        card_description_title.textContent = `Day's description:`

        const card_description = document.createElement('div');    
        card_description.classList.add('card-description');
        const desc = day.description.substring(0, day.description.length-1)
        card_description.textContent = `${desc} with a minimum of ${day.minTemp}°F and a max of ${day.maxTemp}°F.`

        

        description_container.appendChild(card_description_title)
        description_container.appendChild(card_description);


        card.appendChild(date_container);
        card.appendChild(description_container);
        
        info_container.appendChild(card);
    
    });

    //obtain an array of objs
}

// if(!weatherData.ok){
//     throw new Error(`Response status for weatherData: ${weatherData.status}`);
// }

// if(!data.ok){
//     throw new Error(`Response status for data: ${data.status}`);
// }


async function fetchData(location){
    


  

    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DJ7YDUHEMTWA4FZ69Y6YLHXM6`)
    .catch( (error) =>{
        alert('weatherData error')
        const input = document.querySelector('input');
        input.value = '';
    })
    const data = await weatherData.json().catch( (error) =>{
        alert("data error")
        const input = document.querySelector('input');
        input.value = '';
        
    })

    let arr = []

    data.days.forEach(day => {
        const date = day.datetime;
        const description = day.description;
        const minTemp =  day.tempmin;
        const maxTemp = day.tempmax;

        const obj = new weatherObject(date, description, minTemp, maxTemp);

        arr.push(obj);
    });

    const input = document.querySelector('input');
    input.value = '';
    addDataToPage(arr);
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.querySelector('input').value;
    
    const info = document.querySelector('.info-container');
    info.innerHTML = '';
    
    fetchData(location);


    
});

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
