import Immutable from 'immutable';

const stateRecord = Immutable.Record({
    label1: '',
    label2: '',
    label3: '',
    label4: ''
});

export const initialState = stateRecord();
