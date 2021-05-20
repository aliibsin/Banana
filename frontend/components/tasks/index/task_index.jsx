import React from 'react';
import SidebarContainer from '../../sidebar/sidebar_container';
import SectionDisplayContainer from '../../sections/section_display_container';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Untitled Task",
      description: "",
      priority: "",
      due_date: "",
      done: false,
      project_id: "",
      section_id: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.props.createTask(task);
  }

  render() {
    
    return (
      <div className="home-page-full">
        <div className="sidebar-expand" onClick={() => this.props.toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <SidebarContainer />
        <div className="nav-contents">
          <hgroup className="header-group">
            <h1>My Tasks</h1>
            <div className="signout-button" onClick={this.props.signout}>Sign Out</div>
          </hgroup>
          
          <div className="section-disp-cont">
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="create-task-button" type="submit" value='New Task' />
              </form>
            </div>
            <SectionDisplayContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskIndex;