import Mozaik from 'mozaik';
import config from '../config';
import weather from 'mozaik-ext-weather/client';
import value from 'mozaik-ext-value/client';

const mozaik = new Mozaik(config);

mozaik.bus.registerApi('weather', weather);
mozaik.bus.registerApi('value', value);

mozaik.startServer();
