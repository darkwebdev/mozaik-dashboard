// Load environment variables from .env file if available
require('dotenv').load();

const apiHost = process.env.API_HOST || 'home-api';
const apiPort = process.env.API_PORT || '8080';
const config = {
  env: 'dev',

  host: '0.0.0.0',
  port: process.env.PORT || 5000,

  // Available themes:
  // + bordeau
  // + harlequin
  // + light-grey
  // + light-yellow
  // + night-blue
  // + snow
  // + yellow
  theme: 'night-blue',

  // clients configs
  api: {
    aws: {
      region: 'eu-west-1'
    },
    jenkins: {
      baseUrl: 'https://my-jenkins.com',
      auth: {
        user: 'me',
        password: 'me'
      }
    }
  },

  // define duration between each dashboard rotation (ms)
  rotationDuration: 8000,

  // define the interval used by Mozaïk Bus to call registered APIs
  apisPollInterval: 15000,

  dashboards: [
    {
      title: 'Smart home',
      columns: 3,
      rows: 2,
      widgets: [
        {
          type: 'time.clock',
          columns: 1, rows: 1,
          x: 0, y: 0
        },
        {
          type: 'weather.weather',
          city: 'Berlin',
          country: 'DE',
          limit: 2,
          columns: 1, rows: 1,
          x: 1, y: 0
        },
        {
          type: 'value.value',
          title: 'Temperature',
          url: `http://${apiHost}:${apiPort}/sensors/temp`,
          pathCurrent: '$.value', /* optional */
          prefix: '', /* optional */
          postfix: '°C', /* optional */
          columns: 1, rows: 1,
          x: 0, y: 1
        },
        {
          type: 'value.value',
          title: 'Humidity',
          url: `http://${apiHost}:${apiPort}/sensors/hum`,
          pathCurrent: '$.value', /* optional */
          prefix: '', /* optional */
          postfix: '%', /* optional */
          columns: 1, rows: 1,
          x: 1, y: 1
        },
        {
          type: 'value.value',
          title: 'Plant water level',
          url: `http://${apiHost}:${apiPort}/sensors/plant`,
          pathCurrent: '$.value', /* optional */
          prefix: '', /* optional */
          postfix: '%', /* optional */
          columns: 1, rows: 1,
          x: 2, y: 1
        }
      ]
    }
  ]
};

module.exports = config;
