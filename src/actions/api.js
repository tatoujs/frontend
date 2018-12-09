import config from '../config/config';

export const fetchLoginHeroku = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };
  return fetch(`${config.hostname}/heroku/login`, requestOptions);
};

export const fetchSelectAppHeroku = (app_id) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic xxxxx', // TO PROVIDE
    },
    body: JSON.stringify({ app_id })
  };

  return fetch(`${config.hostname}/heroku/apps/drains`, requestOptions);
}
