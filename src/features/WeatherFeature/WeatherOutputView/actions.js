import { SET_LIST_WEATHER,
} from './types.js';

export const handleSetListWeather = list => ({
    type: SET_LIST_WEATHER,
    payload: { list },
});

// view actions
export default {
    handleSetListWeather,
};