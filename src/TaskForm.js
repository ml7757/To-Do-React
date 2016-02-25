import React from 'react';
import jQuery from 'jquery';

class TaskForm extends React.Component{

  constructor(){
    super();
  }

  saveTask(event){
    // we prevent the form from doing the default
    event.preventDefault();
    // this.refs...value references the formfield 'ref' attribute and we capture their value that was
    // submitted by clicking the submit button.
    // it is stored in an object, reflecting the database table column names.
    var formData = {
      task_description: this.refs.taskDescription.value,
      duedate: this.refs.dueDate.value
    }
    // we want to POST this to the api via ajax in JSON formData
    jQuery.ajax({
      type: "POST",
      url: "https://checktaskmanager.herokuapp.com/tasks.json",
      data: JSON.stringify({
        task: formData
      }),
      contentType: "application/json",
      dataType: "json"
    }).done(function(){
      console.log("DONE :)");

    }).fail(function(){
      console.log("ERROR :(")
    });

  }
  
  render(){
    return(
        <form className="form-inline well" onSubmit={this.saveTask.bind(this)}>
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
