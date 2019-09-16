const city = document.getElementById('city-input')
const country = document.getElementById('country-input')
const countries = getCountry().then(country =>{
    countriesList(country)
})

country.oninput = () => {
    const country = document.getElementById('country-input').value
    getCountry().then( v => {
        citiesList(v[country])})
}

city.onclick = () => {
    const address = document.getElementById("cities-input").value
    if(!address){
        alert('Вы не ввели город')
        return
    }
    getWeatherData(address).then((v) => {
        removeTableEl();
        v.data.forEach(function(element) {
            appendTableEl(element);
        })
        document.getElementById('table').classList.remove('table-display')

    })
}


