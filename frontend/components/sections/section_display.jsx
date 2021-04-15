import React from 'react';
import SectionDisplayItem from './section_display_item';
import TaskItem from '../tasks/index/task_item';

class SectionDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Untitled Section',
      project_id: this.props.project_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSections();
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = Object.assign({}, this.state);
    this.props.createSection(section);
  }

  render() {
    let filteredSections = this.props.sections.filter(section => section.project_id === this.props.project_id);
    let independentSections = this.props.sections.filter(section => section.project_id === null);
    let nPnSTasks = this.props.tasks.filter(task => task.project_id === null && task.section_id === null);
    let yPnSTasks = this.props.tasks.filter(task => task.project_id === this.props.project_id && task.section_id === null);
    
    return (
      <div className="section-container">
        <div className="task-table-header">
          <div className="tth-task-info">
            <div className="tth-task-name">
              <h4>Task Name</h4>
            </div>
            <div className="tth-task-desc">
              <h4>Description</h4>
            </div>
          </div>
          <div className="tth-task-status">
            <div className="tth-task-due">
              <h4 >Due Date</h4>
            </div>
            <div className="tth-task-priority">
              <h4 >Priority</h4>
            </div>
          </div>
        </div>
        <ul>
          {
            this.props.project_id ? 
            yPnSTasks.map(task => (
              <li key={task.id}>
                <TaskItem task={task} />
              </li>
            )) :
            nPnSTasks.map(task => (
              <li key={task.id}>
                <TaskItem task={task} />
              </li>
            ))
          }
        </ul>

        <ul className="sections-list">
          {
            this.props.project_id ? 
            filteredSections.map(section => (
              <SectionDisplayItem 
                key={section.id}
                section={section}
                project_id={this.props.project_id}
                tasks={this.props.tasks}
                updateSection={this.props.updateSection}
                deleteSection={this.props.deleteSection}
              />
            )) :
            independentSections.map(section => (
              <SectionDisplayItem 
                key={section.id}
                section={section}
                project_id={this.props.project_id}
                tasks={this.props.tasks}
                updateSection={this.props.updateSection}
                deleteSection={this.props.deleteSection}
              />
            ))
          }
          <div>
            <form onSubmit={this.handleSubmit}>
              <input className="section-create" type="submit" value='Add Section' />
            </form>
          </div>
        </ul>
        
      </div>
    )         
  }
}

export default SectionDisplay;

