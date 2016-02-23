import React from 'react';
import AddPriority from './AddPriority';

class AddTask extends React.Component{

    constructor(){
      super();
    }

    onSubmit(event){
      event.preventDefault();
    }

    render(){
        return (
          <form>
            <fieldset>
              <legend>New Task</legend>
              <label><b>Task: </b></label>
              <input type="text" ref="task" />
              <p><label><b>Finish By: </b></label>
              <input type="date" ref="dueDate" /></p>
              <AddPriority />
              <p><button>Save Task</button></p>
            </fieldset>
          </form>
        );
    }
}

export default AddTask;
