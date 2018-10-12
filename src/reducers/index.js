import { combineReducers } from 'redux';
import homeViewReducer from './homeViewReducer.js'
import { weatherGetInfoViewReducer } from '../features/WeatherFeature/WeatherGetInfoView/index.js'
import { weatherOutputViewReducer } from '../features/WeatherFeature/WeatherOutputView/index.js'

const rootReducer = combineReducers({
    homeViewReducer,
    weatherGetInfoViewReducer,
    weatherOutputViewReducer
});

export default rootReducer;