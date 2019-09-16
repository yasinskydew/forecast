const createEl = (data, tag = 'td') => {
    const el = document.createElement(tag)
    el.textContent = data
    return el
} 

const removeTableEl = () => {
    const table = document.getElementById('table-data')
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

const appendTableEl = (dataObject) => {
    const {valid_date, max_temp, min_temp, temp, wind_spd, wind_cdir_full} = dataObject
    const table = document.getElementById('table-data')
    const tr = document.createElement('tr')
    table.append(tr)
    tr.append(createEl(valid_date, 'th'))
    tr.append(createEl(temp))
    tr.append(createEl(max_temp))
    tr.append(createEl(min_temp))
    tr.append(createEl(wind_cdir_full))
    tr.append(createEl(wind_spd.toFixed(2)))
}


