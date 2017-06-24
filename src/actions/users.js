export function fetchUsersForTeam() {
    return {
        type: 'FETCH_USERS_FOR_TEAM__RESOLVED',
        teamId: 123,
        responseData: [
            { userId: 1, name: 'Alice' },
            { userId: 2, name: 'Bob' },
            { userId: 3, name: 'Chris' }, // This is new! "Christopher" is now "Chris"
        ],
    };
};
