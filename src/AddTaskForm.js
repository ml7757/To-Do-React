import React from 'react';
import AddPriorityStatus from './AddPriorityStatus';

class AddTaskForm extends React.Component {
getInitialState: function() {

  return{
    taskDescription: "",
    dueDate: "",
    priority: ""

  };

},
    handleTaskDescriptionChange: function(e){
      this.setState({taskDescription: e.target.value});

    },

    handleDueDateChange: function(e){

      this.setState({dueDate: e.target.value});

    },
    // handlePriorityChange: function(e){
    //
    //   this.setState({priority: e.target.value});
    // },


    onSubmitForm(event){
      event.preventDefault();
      this.props.onHandleData(this.refs.taskDescription.value, this.refs.dueDate.value);
    }

    render(){
        return (
          <form onSubmit={this.onSubmitForm.bind(this)}>
            <fieldset>
              <legend>New Task </legend>
                <label><b>Description: </b></label>
                <input type="text" value={this.state.taskDescription} onChange={this.handleTaskDescriptionChange} />

                <p><label><b>Finish By: </b></label>
                    <input type="date" value={this.state.dueDate} onChange={this.handleDueDateChange} />

                // <label><b>Priority: </b></label>
                //     <input type="radio" name="taskPriority" ref="priority" value="high" onChange={this.handleDueDateChange} /> High
                //     <input type="radio" name="taskPriority" ref="priority" value="normal" /> Normal
                //     <input type="radio" name="taskPriority" ref="priority" value="low" /> Low

          <p><button>Save Task</button></p>
            </fieldset>
          </form>
        );
    }
}

export default AddTaskForm;
