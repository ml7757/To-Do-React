import './stylesheets/components.scss';
import React from 'react';

class Navbar extends React.Component{

  constructor(){
    super();

  }

  render(){
          return (

          <div className="navbar-collapse">
          <img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" />
             <button>Home</button>
              <button>Projects</button>
               <button>Tasks</button>

          </div>

        );
     }
}

export default Navbar;
