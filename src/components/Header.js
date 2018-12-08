import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Header.scss';

class Header extends Component {

  render () {
    return <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>
          <Link to="/">Tatoujs</Link>
        </h1>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/heroku">Heroku</Link>
        </li>
        <li>
          <Link to="/aws">AWS</Link>
        </li>
        <li>
          <Link to="/microsoft-azure">Microsoft Azure</Link>
        </li>
      </ul>
    </nav>;
  }
}

export default Header;
