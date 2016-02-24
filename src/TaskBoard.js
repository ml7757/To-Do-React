import React from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

class TaskBoard extends React.Component{

  constructor(){
    super();

    this.state = {
      tasks: []
    };
  }

  renderTask(task){
    return <Task
      taskDescription={task.taskDescription}
      finishBy={task.finishBy} />
  }

  onAddTask(task, dueDate){
    var newTask = { taskDescription: task, finishBy: dueDate };
    var newTasks = this.state.tasks.concat(newTask);
    this.setState({
            tasks: newTasks
        });
  }

    render(){
        return (
          <div>
            {this.state.tasks.map(this.rendTask.bind(this))}
            <AddTaskForm onHandleData=this.onAddTask.bind(this)} />
          </div>
        );
    }
}

export default TaskBoard;
