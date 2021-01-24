import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Maintenance from 'src/views/errors/Maintenance.jsx';
import toast, {Toaster} from 'react-hot-toast';
import withClearCache from './ClearCache';

import 'src/Calendar.css'

class App extends Component {

  constructor(props){
      super(props);
  }

  componentDidMount(){
    if(caches){
      caches.keys().then(function(names){
        console.log(names)
        for (let name of names) caches.delete(name);
      });
    }
  }

  render(){
    return (
      <div>
      <Router>
        <Switch> 
          <Route exact path='/' component={Maintenance} /> 
        </Switch>
      </Router>
      <Toaster/>
      </div>
    );
  }

}

export default withRouter(withClearCache(App));