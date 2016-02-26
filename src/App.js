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
            <div className="container">
              <div className="row">
                <Navbar />
               <div className="col-sm-8 col-sm-offset-2">
                {this.props.children}
              </div>
             </div>
             </div>
        );
    }
  }

export default App;
