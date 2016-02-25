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

      console.log(component);
      var taskId = component.props.id;
      console.log(taskId);
      // when done and the task is removed upon receiving
      // a 200 message from the server via ajax/JSON we again need to tell
      // our parent we changed via an onChange prop. This should then fire the reloadTask method in the parent
      // to reload the updated tasks list from the server

      jQuery.ajax({
        method: "DELETE",
        url: `https://checktaskmanager.herokuapp.com/tasks/${taskId}`,
        contentType: "application/json",
        dataType: "json"
      })
      .done(function(data){
        console.log(data);
        component.props.onChange();
      });


    }

    render(){
      return(
        <div>
          <li className="list-group-item">
            <a className="pull-right" onClick={this.deleteTask.bind(this)}>"Delete Me"</a>
            <span>{this.props.taskDescription}</span>
            <span>{this.props.dueDate}</span>
          </li>
        </div>
      );
    }
}

export default Task;
