import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


class TaskItem extends React.Component {
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
  }

  render() {
    return (
      <div className="task-header">
        <div className="task-info">
          <div className="task-name">
            <div className="task-check">
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </div>
            <h4>{this.props.task.name}</h4>
          </div>
          <div className="task-desc">
              <h4>{this.props.task.description}</h4>
          </div>
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