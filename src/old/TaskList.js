import React from 'react';
import jQuery from 'jquery';
import AddTaskForm from './AddTaskForm';
import Task from './Task'

class TaskList extends React.Component{

  constructor(){
    super();

    this.state = {
      tasks: []
    };
  }

  reloadTasks(){
    // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
    var component = this;
    jQuery.getJSON("https://checktaskmanager.herokuapp.com/", function(data){
        component.setState({
            tasks: data.tasks
        });
      });
  }

  componentDidMount(){
    this.reloadTasks();
  }

  render(){
    return(
      <div className="task-list">
          {this.state.tasks.map(function(task, i) {
            return(
              <Task key={task.id} task_description={task.task_description} duedate={task.duedate}/>
            );
          }, this)}
        <AddTaskForm onChange={this.reloadTasks.bind(this)} />
      </div>
    );
  }
}
export default TaskList;
