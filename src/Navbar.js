import './stylesheets/components.scss';
import React from 'react';

class Navbar extends React.Component{

  constructor(){
    super();

  }

  render(){
          return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>

                  </button>
                  <a className="navbar-brand" href="/"><img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" /></a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">  </ul>
                  <ul className="nav navbar-nav navbar-right colo">
                    <li><a href="../navbar-fixed-top/">Log Out</a></li>
                  </ul>
                </div>
              </div>
            </nav>
        );
     }
}

export default Navbar;
