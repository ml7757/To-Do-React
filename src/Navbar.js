import './stylesheets/components.scss';
import React from 'react';

class Navbar extends React.Component{

  constructor(){
    super();

  }

  render(){
          return (

          <div className="navbar-collapse navv">
          <img className="logo" src="http://s17.postimg.org/6ntnarrfz/Checklogo2.png" />
            <div className="btn-toolbar ">
               <button className="btn colo" href="/">Home</button>
               <button className="btn colo" href="#">Log Out</button>
             </div>
          </div>

        );
     }
}

export default Navbar;
