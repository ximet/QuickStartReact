import { COUNTRY_LABEL_1_CHANGE,
    COUNTRY_LABEL_2_CHANGE,
    COUNTRY_LABEL_3_CHANGE,
    COUNTRY_LABEL_4_CHANGE
} from './types.js';
import { getLabel1, getLabel2, getLabel3, getLabel4 } from './selectors';
import { getAirTemperature } from '../../../services/WeatherService.js';
import { handleSetListWeather } from '../WeatherOutputView/actions';
import { push } from 'connected-react-router';

const handleCountryLabel1Change = label => ({
    type: COUNTRY_LABEL_1_CHANGE,
    payload: { label },
});

const handleCountryLabel2Change = label => ({
    type: COUNTRY_LABEL_2_CHANGE,
    payload: { label },
});

const handleCountryLabel3Change = label => ({
    type: COUNTRY_LABEL_3_CHANGE,
    payload: { label },
});

const handleCountryLabel4Change = label => ({
    type: COUNTRY_LABEL_4_CHANGE,
    payload: { label },
});

const submit = () => (dispatch, getState) => {
    const state = getState();
    const lat = getLabel1(state);
    const lng = getLabel2(state);
    const label3 = getLabel3(state);
    const label4 = getLabel4(state);
    const params = `${label3},${label4}`

    getAirTemperature(lat, lng, params)
        .then(data => {
            const path = '/weatherOutput';
            dispatch(handleSetListWeather(data.hours));
            dispatch(push(path))
            console.log(data)
        });
};

// view actions
export default {
    handleCountryLabel1Change,
    handleCountryLabel2Change,
    handleCountryLabel3Change,
    handleCountryLabel4Change,
    submit
};