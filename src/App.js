import './stylesheets/components.scss';
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
  componentDidMount(){
    // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
    var self = this;
    jQuery.getJSON("https://checktaskmanager.herokuapp.com/", function(data){
        self.setState({
            tasks: data.tasks
        });
      });
  }

  onAddTask(taskDescription, dueDate){
    var newTask = { description: taskDescription, due: dueDate };
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
            tasks: newTasks
        });
  }

  renderTask(task){
    console.log(task.id);
    return <Task key={task.id} description={task.task_description} due={task.duedate}/>;
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
