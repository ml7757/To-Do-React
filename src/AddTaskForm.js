import './stylesheets/components.scss';
import React from 'react';
//import AddPriorityStatus from './AddPriorityStatus';

class AddTaskForm extends React.Component {

    onSubmitForm(event){
      event.preventDefault();
      this.props.onHandleData(this.refs.taskDescription.value, this.refs.dueDate.value);
    }

    render(){
        return (
          <form onSubmit={this.onSubmitForm.bind(this)}>
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
