import { createSelector } from 'reselect';

export const getLabel1 = state => state.weatherGetInfoViewReducer.get('label1');
export const getLabel2 = state => state.weatherGetInfoViewReducer.get('label2');
export const getLabel3 = state => state.weatherGetInfoViewReducer.get('label3');
export const getLabel4 = state => state.weatherGetInfoViewReducer.get('label4');

export default createSelector(
    [
        getLabel1,
        getLabel2,
        getLabel3,
        getLabel4
    ],
    (
        label1,
        label2,
        label3,
        label4,
    ) => {
        return {
            label1,
            label2,
            label3,
            label4,
            TITLE: 'WeatherGetInfoView',
        }
    },
);
