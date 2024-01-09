const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userInfoContainer = document.querySelector('.user-info-container');
const grantAccessContainer = document.querySelector('.grant-location-container');
const loadingScreen = document.querySelector('.loading-container');
const searchForm = document.querySelector('[data-searchForm]');

let currentTab = userTab;
const apiKey = '320909bf9ce6f3eddee2e22ff3cc4758';

currentTab?.classList.add('current-tab')


function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab?.classList.remove('current-tab');
        currentTab = clickedTab;
        currentTab?.classList.add('current-tab');

        if (!searchForm?.classList.contains('active')) {
            userInfoContainer?.classList.remove('active');
            grantAccessContainer?.classList.remove('active');
            searchForm?.classList.add('active');
        }
        else {
            searchForm?.classList.remove('active');
            userInfoContainer?.classList.remove('active')
            // lattitude or lognitude present h ya nhi 
            getFromSessionStorage();
        }
    }

}

userTab?.addEventListener('click', () => {
    switchTab(userTab);
})

searchTab?.addEventListener('click', () => {
    switchTab(searchTab);
})

function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("userCoordinates");
    // console.log(localCoordinates);

    // Local Coordinates Not present - Grant Access Container
    if (!localCoordinates) {
        grantAccessContainer.classList.add('active');
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
}



async function fetchWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    // Remove Active Class from the Grant access Container
    grantAccessContainer.classList.remove('active');

    // loading 
    loadingScreen.classList.add('active');

    // try - catch Block
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        if (!data.sys) {
            throw data;
        }
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch (err) {
        loadingScreen.classList.remove('active');
        // notFound.classList.add('active');
        // errorImage.style.display = 'none';
        // errorText.innerText = `Error: ${err?.message}`;
        // errorBtn.style.display = 'block';
        // errorBtn.addEventListener("click", fetchWeatherInfo);
    }
}
function renderWeatherInfo(weatherInfo) {
    const cityName = document.querySelector('[data-cityName]');
    const countryFlag = document.querySelector('[data-countryFlag]');
    const description = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const clouds = document.querySelector('[data-clouds]');

    cityName.innerText = weatherInfo?.name;
    countryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    description.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
    clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;
}

const grantAccessButton = document.querySelector('[data-grantAccess]');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        grantAccessButton.style.display = 'none';
    }
}





















// const api = 'd1845658f92b31c64bd94f06f7188c9c';

// async function fetchWeatherDetails() {
//     try {
//         let latitude = 44.34;
//         let lognitude = 10.99;
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${lognitude}&appid=${api}`);

//         var data = await response.json();

//         renderWeatherInfo(data);
//     }
//     catch (e) {
//         console.log('error', e)
//     }

//     console.log(data);

// }
// function renderWeatherInfo(data) {
//     let newPara = document.createElement('p');
//     newPara.textContent = data['main'].temp;

//     document.body.appendChild(newPara);
// }

// async function getLocation() {
//     if (navigator.geolocation) {
//         await navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position.coords.latitude)
//             console.log(position.coords.longitude)
//         });
//     }
//     else {
//         console.log('gelocation is not supported by your browser')
//     }
// }