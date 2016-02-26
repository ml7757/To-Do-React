import './stylesheets/components.scss';
import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import ProjectList from './ProjectList';

class App extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (

      <div className="bio container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <Navbar/>
            <ProjectList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
