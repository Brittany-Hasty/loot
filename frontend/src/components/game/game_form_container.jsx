import { connect } from 'react-redux';
import { createGame } from '../../actions/game_actions';
import gameForm from "./game_form";

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    createGame: (game) => dispatch(createGame(game))
});

export default connect(mSTP, mDTP)(gameForm);
