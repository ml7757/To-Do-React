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
    var newTask = { task_description: taskDescription, duedate: dueDate };
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
            tasks: newTasks
        });

    this.saveData(newTask);
  }

  renderTask(task){
    return <Task key={task.id} task_description={task.task_description} duedate={task.duedate}/>;
  }

  saveData(task){
    console.log(task);
    jQuery.ajax({
        type: "POST",
        url: "https://checktaskmanager.herokuapp.com/tasks.json",
        data: JSON.stringify({
            task: task
        }),
        contentType: "application/json",
        dataType: "json"
    });
  }

    render(){
        return (

          <div className="bio">
             <img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" />
		        <ul>
              {this.state.tasks.map(this.renderTask.bind(this))}
            </ul>
            <AddTaskForm onHandleData={this.onAddTask.bind(this)} />
          </div>
        );
    }
  }

export default App;
