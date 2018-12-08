import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import moment from 'moment';
import socketIOClient from 'socket.io-client';

import styles from '../styles/Heroku.scss';
import {login, saveLog} from '../actions/heroku.action';
import config from '../config/config';

class Heroku extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.logsRef = React.createRef();
    this.socket = socketIOClient(config.host.socket);

    setInterval(() => {
      this.props.saveLog({
        date: Date.now(),
        type: 'app[web.1]',
        text: 'salut ' + this.props.logs.length
      });
      this.scrollBottom(this.logsRef.current);
    }, 250);
  }

  initSocketConnection = () => {
    this.socket.emit('init', 'hi');
  };

  getLog = () => {
    this.socket.on('getLog', log => {
      this.props.saveLog(log);
    });
  };

  scrollBottom = div => {
    div.scrollTop = div.scrollHeight;
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const login = data.get('login');
    const username = data.get('username');
    this.props.login(login, username);
  };

  render () {
    return <div className={styles.wrapper}>
      <form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"/>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"/>
        <button>Connection</button>
      </form>
      <div className={styles['log-block']} ref={this.logsRef}>
        <ul>
          {this.props.logs.map((log, i) =>
            <li key={i}>
              <p>{moment(log.date).format('L')} - {log.type} > {log.text}</p>
            </li>
          )}
        </ul>
      </div>
    </div>;
  }
}

Heroku.propTypes = {
  // props from redux store
  logs: PropTypes.array,

  // redux actions
  login: PropTypes.func,
  saveLog: PropTypes.func
};

const mapStateToProps = state => ({
  logs: state.heroku.logs
});

export default connect(mapStateToProps, {
  login,
  saveLog
})(Heroku);
