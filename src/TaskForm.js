import React from 'react';
import jQuery from 'jquery';

class TaskForm extends React.Component{

  constructor(){
    super();
    this.state = {
      success: [],
      errors: []
    };
  }

  saveTask(event){
    // we prevent the form from doing the default
    event.preventDefault();
    // we need to rename ourselves
    var component = this;
    // this.refs...value references the formfield 'ref' attribute and we capture their value that was
    // submitted by clicking the submit button.
    // we store it in an object, reflecting the database table's column names.
    var formData = {
      task_description: this.refs.taskDescription.value,
      duedate: this.refs.dueDate.value,
      project_id: component.props.projectId
    }
    // we want to POST formData to the api via ajax in JSON format
    jQuery.ajax({
      type: "POST",
      url: `https://checktaskmanager.herokuapp.com/projects/${formData.project_id}/tasks`,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        task: formData
      })
    }).done(function(data){
      console.log(data);
      // on successful post, receiving 200 status from the server, we want to tell our parent
      // that we have changed.
      // our parent was so kind to give us the 'onChange' property :)
      // the onChange property in the parent fires the 'renderTasks' method,
      // reloading the state with the updated tasks.
      component.props.onChange();

    }).fail(function(data){
      console.log(data);
      // we want to show what went wrong on the page, so the user
      // knows what happened and how to fix it.
      component.setState({
        errors: data.statusText
      });

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
