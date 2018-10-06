import { SET_TO_LOG } from '../actions/homeViewActions.js';
import { initialState } from '../initials/homeViewInitialState.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TO_LOG: {
            const { logPath } = action.payload;

            return state.update('history', history => history.push({
                    path: logPath
                }));
        }

        default: {
            return state;
        }
    }
}