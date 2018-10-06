import { createSelector } from 'reselect';


export const homeViewSelector = createSelector(
    [],
    () => {
        return {
            TITLE: 'Home',
            BUTTON_LABEL: 'Redirect to Hello page'
        };
    }
);