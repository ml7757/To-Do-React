import './stylesheets/components.scss';
import React from 'react';
import { Link } from 'react-router';
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
                {this.props.children}
              </div>
             </div>
             </div>
        );
    }
  }

export default App;
