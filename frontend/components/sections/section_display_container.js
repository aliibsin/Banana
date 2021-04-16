import { connect } from 'react-redux';

import SectionDisplay from './section_display';
import {
  fetchSections,
  createSection, 
  updateSection, 
  deleteSection
} from '../../actions/section_actions' ;

import { updateTask, deleteTask, createTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  let project_id = ownProps.project_id;
  return ({
    
    sections: Object.values(state.entities.sections),
    tasks: Object.values(state.entities.tasks),
    project_id: project_id
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchSections: () => dispatch(fetchSections()),
    createSection: section => dispatch(createSection(section)),
    updateSection: section => dispatch(updateSection(section)),
    deleteSection: sectionId => dispatch(deleteSection(sectionId)),
    createTask: task => dispatch(createTask(task)),
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: taskId => dispatch(deleteTask(taskId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionDisplay);