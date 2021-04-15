import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { toggleSidebar } from '../../actions/sidebar_actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.sidebarOpen,
  errors: state.errors,
  projects: Object.values(state.entities.projects),
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar)
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);