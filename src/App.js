import './stylesheets/components.scss';
import React from 'react';
import { Link } from 'react-router';

class App extends React.Component{

  constructor(){
    super();

  }

    render(){
        return (
          <div className="bio container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" />
                {this.props.children}
              </div>
             </div>
          </div>
        );
    }
  }

export default App;
