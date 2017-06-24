import React, { Component } from 'react';

import { fetchUsersForTeam } from '../actions/users';

import logo from '../logo.svg';
import '../App.css';

const User = ({name, userId}) => {
    return <div key={`${userId}`}>{name} :: {userId}</div>;
}

class App extends Component {
    onClick() {
        const { dispatch } = this.props;
        return dispatch(fetchUsersForTeam());
    }

    render() {
        const users = Object.values(this.props.userData);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <a href="#" onClick={() => this.onClick()}>Click</a> to load updated users
                </p>
                <div className="users">
                    {users.map(u => User(u))}
                </div>
            </div>
        );
    }
}

export default App;
