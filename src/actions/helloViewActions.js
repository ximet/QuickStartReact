import { push } from 'connected-react-router';

export const helloViewActions = {
    redirectToHello: ()  => (dispatch) => {
        const path = '/';
        dispatch(push(path))
    }
};