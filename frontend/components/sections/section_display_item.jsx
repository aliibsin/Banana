import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

class SectionDisplayItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.section.name,
    };

    this.nameInput = React.createRef();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  }

  handleNameChange(e) {
    const editedName = e.target.value.replace(/[\t]+/g, '');
    this.setState({ name: editedName });
  }

  handleNameUpdate(e) {
    const { name: stateName } = this.state;
    this.props.updateSection({ id: this.props.section.id, name: stateName });
  }

  deleteSection() {
    this.props.deleteSection(this.props.section.id)
  }

  render () {
    const { name: stateName } = this.state;
    return (
      
      <li className="indiv-section-cont">
        <div>
          <div id="del-sec-but-cont">
            <div className="delete-section-button" onClick={() => this.deleteSection()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <input
            type="text"
            className="show-section-name"
            onChange={this.handleNameChange}
            onBlur={this.handleNameUpdate}
            ref={this.nameInput}
            value={stateName}
            placeholder="Section name can't be blank"
            autoComplete="off" 
            autoCorrect="off" 
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
        
      </li>
    )
  }

}
  
  



export default SectionDisplayItem;