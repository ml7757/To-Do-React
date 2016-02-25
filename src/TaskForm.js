import React from 'react';
import jQuery from 'jquery';

class TaskForm extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
        <form className="form-inline well">
        <div className="form-group">
          <label className="sr-only">Add a task</label>
          <input className="form-control" type="text" ref="taskDescription" placeholder="Add a task" />
        </div>
        <div className="form-group">
          <label className="sr-only">Duedate</label>
          <input className="form-control" type="date" ref="dueDate" placeholder="Pick a date" />
        </div>
          <button type="submit" className="btn btn-info">+</button>
        </form>
    );
  }
}
export default TaskForm;
