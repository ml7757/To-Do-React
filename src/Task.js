import React from 'react';
import jQuery from 'jquery';

class Task extends React.Component{
    constructor(){
      super();

    }

    toggleChecked(event) {
    this.syncState({
      status: this.refs.completed.checked
    });
  }

    syncState(updatedState) {
    console.log("synching state");

    var component = this;
    var formData = {
      task_description: component.props.taskDescription,
      duedate: component.props.dueDate,
      project_id: component.props.projectId,
      id: component.props.id,
      status: updatedState.status
    }
    console.log(formData);

    jQuery.ajax({
      type: "PUT",
      url: `https://checktaskmanager.herokuapp.com/projects/${formData.project_id}/tasks/${formData.id}`,
      data: JSON.stringify({
          task: formData
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        console.log(data);
        component.props.onChange();
      })

      .fail(function(error) {
        console.log(error);
      })
    }

    deleteTask(event){
      event.preventDefault();

      // we need to rename ourselves again
      var component = this;

      // lets assign the task id to a new variable
      var taskId = component.props.id;
      var projectId = component.props.projectId;
      console.log(projectId);

      jQuery.ajax({
        method: "DELETE",
        // we have to apend the task id to the url, so the server knows which task to delete.
        url: `https://checktaskmanager.herokuapp.com/projects/${projectId}/tasks/${taskId}`,
        contentType: "application/json",
        dataType: "json"
      })
      .done(function(data){
        // when done and the task is removed, we receive a
        // 200 message from the server via ajax/JSON.
        // our parent we changed via an onChange prop. This should then fire the reloadTask method in the parent
        // to reload the updated tasks list from the server
        console.log(data);
        component.props.onChange();
      });


    }

    render(){
      return(
            <li className="list-group-item">
            <input className="toggle" id={this.props.id} type="checkbox" ref="completed" checked={this.props.status ? "checked" : ""} onChange={this.toggleChecked.bind(this)} />
              <h4 className="list-group-item-heading">Due: {this.props.dueDate}</h4>
              <p className="list-group-item-text">{this.props.taskDescription}</p>
              <a className="btn btn-danger btn-xs" onClick={this.deleteTask.bind(this)}>x</a>
            </li>
      );
    }
}

export default Task;
