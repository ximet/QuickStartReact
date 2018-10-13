import { getRequest } from '../helpers/requestHelper.js';

const API_LINK = 'https://api.stormglass.io/'
const API_KEY = '3e81b1d8-cec0-11e8-a9d2-0242ac130004-3e81b2e6-cec0-11e8-a9d2-0242ac130004';

export const getAirTemperature = (lat, lng, params) => {
    return getRequest(`${API_LINK}point?lat=${lat}&lng=${lng}&params=${params}`, {
                headers: {
                    'Authorization': API_KEY
                }
            }).then(function(response) {
                return response.json();
            });
}