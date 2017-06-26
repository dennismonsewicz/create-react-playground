import _ from 'lodash';

function getUserById(users, id) {
    return _.find(users, user => user.userId === id);
}

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

const userServiceReducer = (state = initState, action) => {
    if (action.type === 'FETCH_USERS_FOR_TEAM__RESOLVED') {
        const userIds = state.usersForTeams[action.teamId];
        const newUserData = userIds.map(idx => ({
            ...state.userData[idx],
            ...getUserById(action.responseData, idx),
        }));

        return Object.assign({}, state, {userData: newUserData});
    }

    return state;
};

export default userServiceReducer;
