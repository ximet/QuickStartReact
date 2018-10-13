import { createSelector } from 'reselect';

export const getWeatherList = state => state.weatherOutputViewReducer.get('weatherList');


export default createSelector(
    [
        getWeatherList
    ],
    (
        list
    ) => {
        const weatherList = list.length === 0
                                ? list
                                : list.map(item => item.airTemperature[0].source);

        return {
            weatherList,
            TITLE: 'WeatherOutputView',
        }
    },
);
