import Immutable from 'immutable';

const stateRecord = Immutable.Record({
    weatherList: [],
});

export const initialState = stateRecord();
