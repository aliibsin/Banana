import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-header">
        <div className="task-name">
          <h4>{this.props.task.name}</h4>
        </div>
        <div className="task-status">
          <div className="task-due">
            <h4>{this.props.task.due_date}</h4>
          </div>
          <div className="task-priority">
            <h4>{this.props.task.priority}</h4>
          </div>
        </div>
        
      </div>
    )
  }

}

export default TaskItem;