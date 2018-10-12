import {
    COUNTRY_LABEL_CHANGE,
} from './types.js';
import { initialState } from './initial.js';

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case COUNTRY_LABEL_CHANGE:
        return state.set('label', action.payload.label);
    default:
        return state;
    }
}
