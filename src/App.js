import React from 'react';
import jQuery from 'jquery';
import AddTaskForm from './AddTaskForm';
import Task from './Task';


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      tasks: []
    };
  }

  // renderTask(task){
  //   console.log(task);
  //   {this.state.tasks.map(function(task, i){
  //       return(
  //         <Task description={task.taskDescription} finishBy={task.finishBy} />
  //       );
  //   })}
  //
  // }

  renderTask(task){
    console.log(task);
    return <Task description={task.taskDescription} finishBy={task.finishBy} />;
  }
  onAddTask(task, dueDate){
    var newTask = { taskDescription: task, finishBy: dueDate };
    var newTasks = this.state.tasks.concat(newTask);
    console.log(newTasks);
    this.setState({
            tasks: newTasks
        });
  }

    render(){
        return (
          <div>
            {this.state.tasks.map(this.renderTask.bind(this))}
            <AddTaskForm onHandleData={this.onAddTask.bind(this)} />

          </div>
        );
    }
  }

export default App;
