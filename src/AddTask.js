import React from 'react';

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
              <label>Task: </label>
              <input type="text" ref="task" />
              <p><label>Finsh By: </label>
              <input type="date" ref="dueDate" /></p>
              <p><button>Save Task</button></p>
            </fieldset>
          </form>
        );
    }
}

export default AddTask;
