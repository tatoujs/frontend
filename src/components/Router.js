import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Heroku from './Heroku';

class Router extends Component {

  render () {
    return <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/heroku' component={Heroku}/>
      </Switch>
    </main>;
  }
}

export default Router;
