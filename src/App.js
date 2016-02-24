import React from 'react';
import jQuery from 'jquery';
import AddTaskForm from './AddTaskForm';


class App extends React.Component{

  onAddTask(task_value, date_value){
    console.log("I need to get " + task_value " on " + date_value );
  }

    render(){
        return (
          <div>
          <h1>Check &#9745;</h1>
          <AddTaskForm onHandleData={this.onAddTask.bind(this)} />
          </div>
        );
    }
}

export default App;
