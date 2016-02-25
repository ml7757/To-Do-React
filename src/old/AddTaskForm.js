import React from 'react';
import jQuery from 'jquery';
import './stylesheets/components.scss';
//import AddPriorityStatus from './AddPriorityStatus';

class AddTaskForm extends React.Component {

    saveTask(event){
      event.preventDefault();

      var component = this;
      var task = {
        task_description: this.refs.taskDescription.value,
        duedate: this.refs.dueDate.value
      }
      console.log(task);

      jQuery.ajax({
          type: "POST",
          url: "https://checktaskmanager.herokuapp.com/tasks.json",
          data: JSON.stringify({
              task: task
          }),
          contentType: "application/json",
          dataType: "json"
      })
      .done(function(data) {
        console.log(data);
        component.props.onChange();
        component.refs.taskDescription.value = "";
        component.refs.dueDate.value= "";
      })

      .fail(function(error) {
        console.log(error);
      });
    }

    render(){
        return (
          <form onSubmit={this.saveTask.bind(this)}>
            <fieldset>
              <legend><em>Add a Task </em></legend>
              <label><b>Task: </b></label>
              <input type="text" ref="taskDescription" />
              <p><label><b>Finish By: </b></label>
              <input type="date" ref="dueDate" /></p>
              <p><button className="btn-border-radius-base">Save Task</button></p>
            </fieldset>
          </form>
        );
    }
}

export default AddTaskForm;
