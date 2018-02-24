import React from 'react';
import Mozaik from 'mozaik/browser';
import time from 'mozaik-ext-time';
import weather from 'mozaik-ext-weather';
import value from 'mozaik-ext-value';

const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions = Mozaik.Actions.Config;

Mozaik.Registry.addExtensions({
  time,
  weather,
  value
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
