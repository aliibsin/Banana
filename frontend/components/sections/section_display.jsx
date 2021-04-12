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

  componentDidMount() {
    this.props.fetchSections();
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = Object.assign({}, this.state);
    this.props.createSection(section);
  }

  render() {
   
    let sections = this.props.state.entities.sections[this.props.project_id];
    
    if (sections) {
      return (
        <div className="section-container">
          <ul>
            {
              sections.map(section => (
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
    } else {
      return null;
    }
    
  }
}

export default SectionDisplay;

