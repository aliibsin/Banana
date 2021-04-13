import React from 'react';
import SectionDisplayItem from './section_display_item'

class SectionDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Untitled Section',
      project_id: this.props.project_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = Object.assign({}, this.state);
    this.props.createSection(section);
  }

  render() {
    // console.log(this.props.sections)
    let filteredSections = this.props.sections.filter(section => section.project_id === this.props.project_id);
    return (
      <div className="section-container">
        <div className="task-table-header">
          <div className="tth-task-name">
            <h4>Task Name</h4>
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

        <ul className="sections-list">
          {
            filteredSections.map(section => (
              <SectionDisplayItem 
                key={section.id}
                section={section}
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

