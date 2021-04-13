
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  }

  toggle() {
    this.setState({open: !this.state.open})
  };


  deleteProj() {
    this.props.deleteProject(this.props.projectId);
  }

  render() {
    
    return (
      <div className="dd-wrapper" ref={this.wrapperRef}>
        <div 
          tabIndex={0} 
          className="dd-header" 
          role="button" 
          onKeyPress={() => this.toggle()} 
          onClick={() => this.toggle()} > 
  
          <div className="dd_header_title">
          <p>{this.props.title}</p>
          </div>
          <div className="delete-project-button"> 
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        { this.state.open && (
          <ul className="dd-list">
            <Link to="/home">
              <li className="dd-list-item" onClick={() => this.deleteProj()}>
                <div>
                  Delete Project
                </div>
              </li>
            </Link>
          </ul>
        )}
      </div>
    )
  }
}

export default Dropdown;