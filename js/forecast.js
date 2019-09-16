async function getForecast(){
    const address = document.getElementsByTagName("input")[0].value
    if(!address){
        alert('Вы не ввели город')
        return
    }
    const forecast = await getWeatherData(address)
    return forecast
}

const citiesList = (array) => {
    if(array !== undefined){
        array.forEach(function(el){
            const listEl = document.createElement('option')
            listEl.value = el
            document.getElementById('cities').appendChild(listEl)
        })
    } else {
       document.getElementById('cities-input').value = '';
       const list = document.getElementById('cities').getElementsByTagName('option')
       for(let item of list){
           item.remove()
       }
    }
}

const countriesList = (countries) => {
    for(key in countries){
        const listEl = document.createElement('option')
        listEl.value = key
        document.getElementById('countries').appendChild(listEl)
    }
}