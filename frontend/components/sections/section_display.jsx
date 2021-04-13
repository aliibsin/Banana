import React from 'react';
import SectionDisplayItem from './section_display_index'

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
        <ul>
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
              <input type="submit" value='Add Section' />
            </form>
          </div>
        </ul>
        
      </div>
    )         
  }
}

export default SectionDisplay;

