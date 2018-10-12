import { createSelector } from 'reselect';

export const getLabel = state => state.weatherGetInfoReducer.get('label');

export default createSelector(
    [
        getLabel
    ],
    (
        label
    ) => {
        return {
            label,
            TITLE: 'WeatherGetInfoView',
        }
    },
);
