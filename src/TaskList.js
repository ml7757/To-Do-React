import React from 'react';
import jQuery from 'jquery';
import Task from './Task';
import TaskForm from './TaskForm';

class TaskList extends React.Component{

    constructor(){
      super();

      this.state = {
        tasks: [], //render this with JSON from api
        messages: []
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

    showMessages(messages){
      console.log("Hey I am here");
      var message = messages.responseText;
      this.setState({
        messages: message
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
            <div>{console.log(this.state.messages)}</div>
            <TaskForm onChange={this.renderTasks.bind(this)}/>

            <table className="table table-hover well">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th>Duedate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(function(task, i) {
                return(
                  <Task key={task.id}
                        id={task.id}
                        taskDescription={task.task_description}
                        dueDate={task.duedate}
                        status={task.status}
                        onChange={this.renderTasks.bind(this)}
                   />
                );
              }, this)}
            </tbody>
            </table>
          </div>
      );
    }
}

export default TaskList;
