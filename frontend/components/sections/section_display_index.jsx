import React from 'react';

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

  render () {
    // console.log(this.props)
    const { name: stateName } = this.state;
    return (
      
      <li className="indiv-section-cont">
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
      </li>
    )
  }

}
  
  



export default SectionDisplayItem;