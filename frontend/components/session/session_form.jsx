import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrs = this.clearErrs.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  clearErrs(e) {
    e.preventDefault();
    // this.props.clearErrors();
    this.props.errors.sessionErr = [];
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.sessionErr.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">
        Welcome to Banana!
        <div>
          Please {this.props.formType} or <p onClick={this.clearErrs}> {this.props.navLink} </p>
        </div>
        
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          
          {this.renderErrors()}
          <div className="signin-form">
            
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              />
            </label>
            
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>
            
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            
            <input className="session-submit" type="submit" value={this.props.formType} />

          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
