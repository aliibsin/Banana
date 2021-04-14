import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  errors: state.errors,
  projects: Object.values(state.entities.projects),
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);