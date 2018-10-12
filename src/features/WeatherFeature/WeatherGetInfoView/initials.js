import Immutable from 'immutable';

const stateRecord = Immutable.Record({
    label: null,
});

export const initialState = stateRecord();
