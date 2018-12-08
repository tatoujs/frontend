import config from '../config/config';

export const fetchLoginHeroku = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };
  return fetch(`${config.host.api}/heroku/login`, requestOptions);
};
