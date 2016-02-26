import './stylesheets/components.scss';
import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {

  constructor() {
    super();

  }

    render(){
        return (
          <div>
            <Navbar />
              <div className="Site-content">
                <div className="row">
                 <div className="col-sm-8 col-sm-offset-2">
                  {this.props.children}
                 </div>
               </div>
             </div>
            <Footer />
          </div>
        );
    }
  }

export default App;
