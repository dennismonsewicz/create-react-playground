import { createStore, combineReducers } from 'redux';

import users from './users';

const rootReducer = combineReducers({ users });

const store = createStore(
    rootReducer,
    {},
);

export default store;
