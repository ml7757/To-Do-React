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
      var projectId = component.props.projectId;

      jQuery.getJSON(`https://checktaskmanager.herokuapp.com/projects/${projectId}/tasks`, function(data){
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
          <div className="list-group">
            <div>{console.log(this.state.messages)}</div>
            <TaskForm projectId={this.props.projectId} onChange={this.renderTasks.bind(this)}/>
              {this.state.tasks.map(function(task, i) {
                return(
                  <Task key={task.id}
                        id={task.id}
                        taskDescription={task.task_description}
                        dueDate={task.duedate}
                        status={task.status}
                        projectId={this.props.projectId}
                        onChange={this.renderTasks.bind(this)}
                   />
                );
              }, this)}
          </div>
      );
    }
}

export default TaskList;
