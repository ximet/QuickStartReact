import Immutable from 'immutable';

const stateRecord = Immutable.Record({
    label1: '58.7984',
    label2: '17.8081',
    label3: 'waveHeight',
    label4: 'airTemperature'
});

export const initialState = stateRecord();