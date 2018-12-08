import React, {Component} from 'react';

import Router from './Router';
import Header from './Header';
import styles from '../styles/App.scss';

class App extends Component {

  render () {
    return <div className={styles.app}>
      <Header/>
      <Router/>
    </div>;
  }
}

export default App;
