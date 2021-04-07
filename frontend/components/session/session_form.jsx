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

  displayUsername() {
    if (this.props.formType === "Sign Up") {
      return (
        <label>
          <h3>Username</h3>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="signin-input"
          />
        </label>
      ) 
    } 
    else {
      return null;
    }
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
  
  clearErrs(e) {
    e.preventDefault();
    this.props.errors.sessionErr = [];
  }

  render() {
    
    return (
      <div className="signin-form-container">
        <div className="signup-logo"></div>
        <div className="err-messages"> {this.renderErrors()} </div>
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          
          
          <div className="signin-form">

            <label>
              <h3>Email</h3>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>

            {this.displayUsername()}
            
            <label>
              <h3>Password</h3>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            
            <input className="session-submit" type="submit" value={this.props.formType} />

          </div>
        </form>

        <div id="change-session">
          {this.props.message} <p onClick={this.clearErrs}> {this.props.navLink} </p>
        </div>

      </div>
    );
  }
}

export default SessionForm;
