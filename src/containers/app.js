import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
