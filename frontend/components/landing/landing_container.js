import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Landing);
