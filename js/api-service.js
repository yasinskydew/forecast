getWeatherData = async (city) => {
    const key = '857a061e8e184631a2f4144417fc8632'
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch`) 
    }
    if(res.status === 204){
        alert('sorry, we can not get forecast right now, but we working on it');
        return 
    }
    return res.json()
    
}
getCountry = async () => {
    const url = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json'
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('Could not fetch')
    }
    if(res.status === 204){
        alert('sorry, we can not get forecast right now, but we working on it');
        return 
    }
    return res.json()
}


