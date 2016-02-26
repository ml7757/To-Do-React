import './stylesheets/components.scss';
import React from 'react';
import ProjectList from './ProjectList';
import Navbar from './Navbar';

class App extends React.Component{

  constructor(){
    super();

  }

    render(){
        return (
            <div className="bio container">

              <div className="row">
               <div className="col-sm-8 col-sm-offset-2">
                <Navbar />
                <ProjectList />
              </div>
             </div>
             </div>
        );
    }
  }

export default App;
