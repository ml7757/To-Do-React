import React from 'react';
import { Link } from 'react-router';
import TaskForm from './TaskForm';

class EditableItem extends React.Component {
  constructor() {
    super();

    this.props = {
      isEditable: true
    };

    this.state = {
      editing: false,
      value: ""
    };
  }

  taskChanged(event) {
    var inputData = {
      task_description: this.refs.taskDescription.value,
      duedate: this.refs.dueDate.value
    }
    this.props.onChange(inputData);
    this.setState({
      editing: false
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter" || event.keyCode == 27) {
      event.target.blur();
    }
  }

  setEditable(event) {
    if (!this.props.isEditable) {
      return;
    }

    this.setState({
      editing: true
    });
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="form-group">
          <input className="form-control" type="text" ref="taskDescription" onBlur={this.taskChanged.bind(this)} onKeyUp={this.handleKeyPress.bind(this)} defaultValue={this.props.taskDescription} />
          <input className="form-control" type="date" ref="dueDate" onBlur={this.taskChanged.bind(this)} onKeyUp={this.handleKeyPress.bind(this)} defaultValue={this.props.dueDate} />
        </div>
      );
    } else {
      return(
        <div onClick={this.setEditable.bind(this)}>
          <h4 className="list-group-item-heading">Task: {this.props.taskDescription}</h4>
          <p className="list-group-item-text">Due: {this.props.dueDate}</p>
        </div>
      );
    }
  }
}

export default EditableItem;
