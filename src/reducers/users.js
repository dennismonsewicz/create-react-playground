import _ from 'lodash';

function getUserById(users, id) {
    return _.find(users, {userId: id});
}

const userServiceReducer = (state, action) => {
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
