import { COUNTRY_LABEL_1_CHANGE,
    COUNTRY_LABEL_2_CHANGE,
    COUNTRY_LABEL_3_CHANGE,
    COUNTRY_LABEL_4_CHANGE
} from './types.js';
import { getLabel1 } from './selectors';
import { getWeatherForListCountry } from '../../../services/WeatherService.js';

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
    const label = getLabel1(state);
    const listCountry = [label]
    getWeatherForListCountry(listCountry)
        .then(data => console.log(data));
};

// view actions
export default {
    handleCountryLabel1Change,
    handleCountryLabel2Change,
    handleCountryLabel3Change,
    handleCountryLabel4Change,
    submit
};