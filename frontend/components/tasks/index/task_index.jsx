import React from 'react';
import SidebarContainer from '../../sidebar/sidebar_container';
import SectionDisplayContainer from '../../sections/section_display_container';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    // console.log(this.props)
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
              <div className="create-task-button">
                <span>
                  New Task
                </span>
              </div>
            </div>
            <div className="section-container">
              <div className="task-table-header">
                <div className="tth-task-name">
                  <h4>Task Name</h4>
                </div>
                <div className="tth-task-status">
                  <div className="tth-task-due">
                    <h4 >Due Date</h4>
                  </div>
                  <div className="tth-task-priority">
                    <h4 >Priority</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskIndex;