import React from 'react';
import jQuery from 'jquery';

class Task extends React.Component{
    constructor(){
      super();

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
          <tr>
            <th>{this.props.taskDescription}</th>
            <td>{this.props.dueDate}</td>
            <td><a className="btn btn-danger btn-xs" onClick={this.deleteTask.bind(this)}>x</a></td>
          </tr>
      );
    }
}

export default Task;
