import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import moment from 'moment';
import openSocket from 'socket.io-client';

import styles from '../styles/Heroku.scss';
import {login, saveLog, selectApp} from '../actions/heroku.action';
import config from '../config/config';

class Heroku extends Component {

  constructor (props) {
    super(props);
    this.logsRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');
    this.props.login(username, password);
  };

  handleChangeSelect = event => {
    if (event.target.value !== '') {
      this.props.selectApp(event.target.value).then(() => {
        if (this.socket === undefined) {
          this.socket = openSocket(config.hostname);
        }
        this.joinRoom(event.target.value);
        this.listenLog();
      });
    }
  };

  joinRoom = (roomName) => {
    this.socket.emit('join-room', roomName);
  };

  listenLog = () => {
    this.socket.on('log', log => {
      this.props.saveLog(log);
      this.scrollBottom(this.logsRef.current);
    });
  };

  scrollBottom = div => {
    div.scrollTop = div.scrollHeight;
  };

  render () {
    return <div className={styles.wrapper}>
      {this.props.apps.length === 0 ?
        <form onSubmit={this.handleSubmit} className={styles['login-form']}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text"/>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"/>
          <button>Connection</button>
        </form> : ''
      }
      {this.props.apps.length > 0 ?
        <select onChange={this.handleChangeSelect} className={styles['select-apps']}>
          <option value="">--- Choose an application ---</option>
          {this.props.apps.map((app, i) =>
            <option key={i} value={app.id}>{app.name}</option>
          )}
        </select> : ''
      }
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
  username: PropTypes.string,
  apps: PropTypes.array,
  logs: PropTypes.array,

  // redux actions
  login: PropTypes.func,
  selectApp: PropTypes.func,
  saveLog: PropTypes.func
};

const mapStateToProps = state => ({
  username: state.heroku.username,
  apps: state.heroku.apps,
  logs: state.heroku.logs
});

export default connect(mapStateToProps, {
  login,
  selectApp,
  saveLog
})(Heroku);
