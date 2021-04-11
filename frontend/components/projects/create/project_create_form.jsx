import React from 'react';

class CreateProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project);
    this.handleModal();
  }

  handleModal() {
    setTimeout(() => {
      if (this.props.errors.length === 0) {
        this.props.setShowModal(false)
      }
    }, 100)
  }

  renderErrors() {
    return(
      <ul className="err-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signin-form-box">  
        <h1 className="create-project-form-title"> 
          Create a new Project 
        </h1>
        <div className="err-messages"> 
          {this.renderErrors()} 
        </div>
          <div className="signin-form">
    
            <label>
              <h3>Name</h3>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="signin-input"
                placeholder="e.g. New Project"
              />
            </label>
            
            <label>
              <h3>Description</h3>
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="signin-input"
                placeholder="Add a description..."
              />
            </label>
            
            <input className="session-submit" type="submit" value='Create' />
            
    
          </div>
        </form> 
      </div>
    )
  }
}


export default CreateProjectForm;