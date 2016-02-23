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
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Task: </label>
            <input type="text" ref="task" />
            <label>Finsh By: </label>
            <input type="date" ref="dueDate" /><br>
            <input type="submit" value="submit" />
          </form>
        );
    }
}

export default AddTask;
