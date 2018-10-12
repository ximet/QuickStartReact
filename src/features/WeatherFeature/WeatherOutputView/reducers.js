import {
    SET_LIST_WEATHER,
} from './types.js';
import { initialState } from './initial.js';

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case SET_LIST_WEATHER:
        return state.set('weatherList', action.payload.list);
    default:
        return state;
    }
}
