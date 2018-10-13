import {
    COUNTRY_LABEL_1_CHANGE,
    COUNTRY_LABEL_2_CHANGE,
    COUNTRY_LABEL_3_CHANGE,
    COUNTRY_LABEL_4_CHANGE,
} from './types.js';
import { initialState } from './initials.js';

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case COUNTRY_LABEL_1_CHANGE:
        return state.set('label1', action.payload.label);
    case COUNTRY_LABEL_2_CHANGE:
        return state.set('label2', action.payload.label);
    case COUNTRY_LABEL_3_CHANGE:
        return state.set('label3', action.payload.label);
    case COUNTRY_LABEL_4_CHANGE:
        return state.set('label4', action.payload.label);    
    default:
        return state;
    }
}
