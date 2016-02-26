import React from 'react';
import jQuery from 'jquery';
import EditableItem from './EditableItem';

class Task extends React.Component{
    constructor(){
      super();

      this.state = {

      }

    }

    toggleChecked(event) {
      this.updateTask({
        id: this.props.id,
        task_description: this.props.taskDescription,
        duedate: this.props.dueDate,
        status: this.refs.completed.checked,
        project_id: this.props.projectId
      });
    }

    changeTask(event){
      console.log(event);
      this.updateTask({
        id: this.props.id,
        task_description: event.task_description,
        duedate: event.duedate,
        status: this.refs.completed.checked,
        project_id: this.props.projectId
      });
    }

    getClassName() {
      var _classNames = ["list-group-item task"];
      if (this.state.completed) { _classNames.push("completed"); }
      return _classNames.join(" ");
    }

    updateTask(updatedTask) {
      console.log("synching state");

      var component = this;

      jQuery.ajax({
        type: "PUT",
        url: `https://checktaskmanager.herokuapp.com/projects/${updatedTask.project_id}/tasks/${updatedTask.id}`,
        data: JSON.stringify({
            task: updatedTask
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
          <li className={this.getClassName()}>
            <input className="toggle checkbox" id={this.props.id} type="checkbox" ref="completed" checked={this.props.status ? "checked" : ""} onChange={this.toggleChecked.bind(this)} />
            <a className="btn btn-danger btn-xs pull-right" onClick={this.deleteTask.bind(this)}>x</a>
            <EditableItem id={this.props.id}
                          taskDescription={this.props.taskDescription}
                          dueDate={this.props.dueDate}
                          status={this.props.status}
                          projectId={this.props.projectId}
                          onClick={this.changeTask.bind(this)}
                          isEditable={!this.state.status}
                          onChange={this.changeTask.bind(this)}/>
          </li>
      );
    }
}

export default Task;
