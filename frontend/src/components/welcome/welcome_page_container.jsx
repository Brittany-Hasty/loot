import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import WelcomePage from './welcome_page';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.user,
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(WelcomePage);