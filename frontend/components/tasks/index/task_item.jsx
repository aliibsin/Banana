import React from 'react';
import Calendar from 'react-calendar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faCheckCircle as fasCheckCircle } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.task.due_date === null) {
      this.date = "";
    } else {
      this.date = this.props.task.due_date.substring(0, 10);
    }

    this.state = {
      name: this.props.task.name,
      description: this.props.task.description,
      priority: this.props.task.priority,
      due_date: this.date,
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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateUpdate = this.handleDateUpdate.bind(this);

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

  handleDateChange(e) {
    this.setState({ due_date: e.target.value });   
  }

  handleDateUpdate() {
    this.props.updateTask({ id: this.props.task.id, due_date: this.state.due_date });
  }

  handleNameUpdate() {
    this.props.updateTask({ id: this.props.task.id, name: this.state.name });
  }

  handleDescriptionUpdate() {
    this.props.updateTask({ id: this.props.task.id, description: this.state.description });
  }

  handlePriorityUpdate() {
    this.props.updateTask({ id: this.props.task.id, priority: this.state.priority });
  }

  handleDone() {
    this.setState({ done: !this.state.done });
    this.props.updateTask({ id: this.props.task.id, done: !this.state.done });
  }

  deleteTask() {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    // console.log(this.props)
    if (this.state.priority === null) this.state.priority = "";
    return (
      <div className={`task-header ${this.state.done ? "done-active" : ""}`}>
        <div className="task-info">
          <div className="task-name">
            <div className="delete-task-button-cont">
              <span className="delete-task-button" >
                <FontAwesomeIcon icon={faTimes} onClick={() => this.deleteTask()} />
              </span>
            </div>
            <div className="task-check">
              {
                this.state.done ? 
                <span>
                  <FontAwesomeIcon icon={fasCheckCircle} onClick={() => this.handleDone()}/>
                </span> :
                <span>
                  <FontAwesomeIcon icon={faCheckCircle} onClick={() => this.handleDone()}/>
                </span>
              }
            </div>
            <input
              type="text"
              className={`show-task-name ${this.state.done ? "done-active" : ""}`}
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
              className={`show-task-desc ${this.state.done ? "done-active" : ""}`}
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
            <input 
              type="date" 
              className={`show-task-date ${this.state.done ? "done-active" : ""}`}
              defaultValue={this.state.due_date}
              onChange={this.handleDateChange}
              onBlur={this.handleDateUpdate}
            />
          </div>
          <div className="task-priority">
            <input
                type="text"
                className={`show-task-priority ${this.state.done ? "done-active" : ""}`}
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