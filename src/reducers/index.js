import { createStore, applyMiddleware } from 'redux';

import users from './users';

const initState = {
    userData: {
        1: { userId: 1, name: 'Alice' },
        3: { userId: 3, name: 'Christopher' },
        4: { userId: 4, name: 'Dave' },
        5: { userId: 5, name: 'Eliza' },
    },
    usersForTeams: {
        123: [1, 3],
        456: [3, 4, 5],
    },
};

const store = createStore(
    users,
    initState,
);

export default store;
