const city = document.getElementById('city-input')

async function getForecast(){
    const coords = await getCityOnformData()
    const forecast = await getWeatherData(coords)
    return forecast
}

city.onclick = () => {
    getForecast().then(v => console.log(` current temperature ${v.data[0].app_temp}`))
}