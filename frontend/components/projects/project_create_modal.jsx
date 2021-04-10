import React from 'react';
import { createProject } from '../../actions/project_actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ProjectCreateModal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   description: ''
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrs = this.clearErrs.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearErrs(e) {
    e.preventDefault();
    this.props.errors.sessionErr = [];
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project);
  }

  renderErrors() {
    return(
      <ul className="err-list">
        {this.props.errors.sessionErr.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  
  modalDisplay() {
    if (this.props.showModal) {
      return (
        <div className="create-project-modal-background">
          <div className="create-project-modal">
            <div className="close-icon" onClick={() => this.setState({ showModal: false })}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            {/* <form onSubmit={this.handleSubmit} className="signin-form-box">
              
              <div className="signin-form">
    
                <label>
                  <h3>Name</h3>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="signin-input"
                  />
                </label>
                
                <label>
                  <h3>Description</h3>
                  <input type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="signin-input"
                  />
                </label>
                
                <input className="session-submit" type="submit" value='Create' />
    
              </div>
            </form> */}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="modal-container">
        {this.modalDisplay()}
      </div>
    )
  }
} 


export default ProjectCreateModal;