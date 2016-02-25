import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import TaskForm from './TaskForm';

class TaskList extends React.Component{

    constructor(){
      super();

      this.state = {
        tasks: [] //render this with JSON from api
      };
    }

    renderTasks(){
      // Let's set the state of the tasks array to the contents of our database via JSON
      var component = this;

      jQuery.getJSON("https://checktaskmanager.herokuapp.com/tasks", function(data){
        console.log(data);
        component.setState({
          tasks: data.tasks
        });
      });
    }

    // Runs whatever is inside, when the component has mounted
    // in this case, renders all tasks into tasks array from JSON
    componentDidMount(){
      this.renderTasks();
    }

    render(){
      return(
          <div>
            <TaskForm />
            <ul className="list-group">
              {this.state.tasks.map(function(task, i) {
                return(
                  <Task key={task.id} id={task.id} taskDescription={task.task_description} dueDate={task.duedate} status={task.status} />
                );
               })}
            </ul>
          </div>
      );
    }
}

export default TaskList;
