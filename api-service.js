getWeatherData = async (location) => {
    const {latitude, longitude} = location
    const key = '857a061e8e184631a2f4144417fc8632'
    const url = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/current?NC&key=${key}&lat=${latitude}&lon=${longitude}`
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch`) 
    }
    return res.json()
    
}

getCityOnformData = async () => {
    const address = document.getElementsByTagName("input")[0].value
    if(!address){
        alert('Вы не ввели город')
        return
    }
    const url = `https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmxhZGltaXI3MjIyMjI3IiwiYSI6ImNqdWkwbHNzZTAybG80M2xsdmdrY3FlbzgifQ.12Ngx7XaututDBBET6TyCg&limit=1`
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Could not fetch`) 
    }
    const data = await res.json()
    if(!data.features[0]){
        alert('city is not defined')
        return
    }
    return {
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
        address
    }

}
