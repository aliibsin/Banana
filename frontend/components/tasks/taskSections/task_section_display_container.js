import { connect } from 'react-redux';

import TaskSectionDisplay from './task_section_display';
import {
  fetchSections,
  createSection, 
  updateSection, 
  deleteSection
} from '../../../actions/section_actions' ;


const mapStateToProps = (state, ownProps) => {
  return ({
    sections: Object.values(state.entities.sections),
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskSectionDisplay);