import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.task.name,
      description: this.props.task.description,
      priority: this.props.task.priority,
      due_date: this.props.task.due_date,
      done: this.props.task.done,
    }

    this.nameInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.priorityInput = React.createRef();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handlePriorityUpdate = this.handlePriorityUpdate.bind(this);

  }

  handleNameChange(e) {
    const editedName = e.target.value.replace(/[\t]+/g, '');
    this.setState({ name: editedName });
  }

  handleDescriptionChange(e) {
    const editedDescription = e.target.value.replace(/[\t]+/g, '');
    this.setState({ description: editedDescription });
  }

  handlePriorityChange(e) {
    const editedPriority = e.target.value.replace(/[\t]+/g, '');
    this.setState({ priority: editedPriority });
  }

  handleNameUpdate(e) {
    this.props.updateTask({ id: this.props.task.id, name: this.state.name });
  }

  handleDescriptionUpdate(e) {
    this.props.updateTask({ id: this.props.task.id, description: this.state.description });
  }

  handlePriorityUpdate(e) {
    this.props.updateTask({ id: this.props.task.id, priority: this.state.priority });
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
            <input
              type="text"
              className="show-task-name"
              onChange={this.handleNameChange}
              onBlur={this.handleNameUpdate}
              ref={this.nameInput}
              value={this.state.name}
              placeholder="Task name can't be blank"
              autoComplete="off" 
              autoCorrect="off" 
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
          <div className="task-desc">
            <input
              type="text"
              className="show-task-desc"
              onChange={this.handleDescriptionChange}
              onBlur={this.handleDescriptionUpdate}
              ref={this.descriptionInput}
              value={this.state.description}
              placeholder="Add a description..."
              autoComplete="off" 
              autoCorrect="off" 
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
        <div className="task-status">
          <div className="task-due">
            <h4>{this.props.task.due_date}</h4>
          </div>
          <div className="task-priority">
            <input
                type="text"
                className="show-task-priority"
                onChange={this.handlePriorityChange}
                onBlur={this.handlePriorityUpdate}
                ref={this.priorityInput}
                value={this.state.priority}
                placeholder="e.g. low..."
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off"
                spellCheck="false"
              />
          </div>
        </div>
        
      </div>
    )
  }

}

export default TaskItem;