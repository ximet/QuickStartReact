import { getRequest } from '../helpers/requestHelper.js';

const API_LINK = 'https://www.metaweather.com/api'

export const getLocation = (location) => {
    return getRequest(`${API_LINK}/location/search/?query=${location}`)
        .then(function (response) {
            return response;
        })
}

export const getListWoeid = (woeidNumberLocation) => {
    return getRequest(`${API_LINK}/location/${woeidNumberLocation}/`)
            .then(function (response) {
                return response;
            })
}

export async function getWeatherForCountry(country) {
    const listLocation = await getLocation(country);
    const getListWeather = await getListWoeid(listLocation[0].woeid);

    return getListWeather.consolidated_weather;
}

export async function getWeatherForListCountry(list) {
    return list.map(async item => {
        return await getWeatherForCountry(item)
    })
}