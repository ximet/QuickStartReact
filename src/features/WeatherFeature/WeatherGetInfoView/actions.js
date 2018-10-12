import { COUNTRY_LABEL_CHANGE,
} from './types.js';
import { getLabel } from './selectors';
import { getWeatherForListCountry } from '../../../services/WeatherService.js';

const handleCountryLabelChange = label => ({
    type: COUNTRY_LABEL_CHANGE,
    payload: { label },
});

const submit = () => (dispatch, getState) => {
    const state = getState();
    const label = getLabel(state);
    const listCountry = [label]
    const weatherList = getWeatherForListCountry(listCountry);
};

// view actions
export default {
    handleCountryLabelChange,
};