import Immutable from 'immutable';

export const initialState = new Immutable.fromJS({
    history: new Immutable.Stack()
});