import { connect } from 'react-redux';

import { signout } from '../../actions/session_actions';
import { toggleSidebar } from '../../actions/sidebar_actions';
import Home from './home'

const mapStateToProps = (state) => {
  return ({
    sidebarOpen: state.sidebar.sidebarOpen,
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  toggleSidebar: () => dispatch(toggleSidebar)
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);