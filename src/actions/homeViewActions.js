import { push } from 'connected-react-router';

const prefixActions = 'HOME_VIEW_';
export const SET_TO_LOG = `${prefixActions}SET_TO_LOG`;

export const homeViewActions = {
    [ SET_TO_LOG ]: (path) => ({
        type: SET_TO_LOG,
        payload: {
            logPath: path
        }
    }),
    
    redirectToHello: ()  => (dispatch) => {
        const path = '/hello';
        dispatch(homeViewActions[SET_TO_LOG](path));
        dispatch(push(path))
    }
};