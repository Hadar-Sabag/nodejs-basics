
import { utilService } from './util.service.js'

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}

function getCountries() {
    const allCountries = utilService.readJsonFile('../countries.json')

    const sortedCountries = allCountries.sort((a, b) => b.population - a.population)

    const topFive = sortedCountries.slice(0, 5)

    return topFive
}

function downloadFlags(countries) {
    const prms = countries.map(country => {
        return utilService.download(
            country.flags.svg,
            `../flags/${country.name.common}.png`
        )
    })
    return Promise.all(prms)
}
