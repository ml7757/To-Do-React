import './stylesheets/components.scss';
import React from 'react';
//import jQuery from 'jquery';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      tasks: []
    };
  }

  onAddTask(taskDescription, dueDate){
    var newTask = { description: taskDescription, due: dueDate };
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
            tasks: newTasks
        });
  }

  renderTask(task){
        return <Task key={task.id} description={task.description} due={task.due}/>;
    }

    render(){
        return (
          <div className="bio">
          <img src="Checklogo.png" />
          <h1 className="head">Check &#9745;</h1>
		  <ul>
            {this.state.tasks.map(this.renderTask.bind(this))}
          </ul>
          <AddTaskForm onHandleData={this.onAddTask.bind(this)} />
          </div>
        );
    }
  }

export default App;
