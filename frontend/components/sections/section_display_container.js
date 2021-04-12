import { connect } from 'react-redux';

import SectionDisplay from './section_display';
import { 
  fetchSections, 
  createSection, 
  updateSection, 
  deleteSection
} from '../../actions/section_actions' ;


const mapStateToProps = (state, ownProps) => {
  let project_id = ownProps.project_id;
  return ({
    state: state,
    project_id: project_id
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchSections: () => dispatch(fetchSections()),
    createSection: section => dispatch(createSection(section)),
    updateSection: section => dispatch(updateSection(section)),
    deleteSection: sectionId => dispatch(deleteSection(sectionId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionDisplay);