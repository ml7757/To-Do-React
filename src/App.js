import './stylesheets/components.scss';
import React from 'react';
import TaskList from './TaskList';

class App extends React.Component{

  constructor(){
    super();

  }

    render(){
        return (
          <div className="bio">
             <img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" />
             <TaskList />
          </div>
        );
    }
  }

export default App;
