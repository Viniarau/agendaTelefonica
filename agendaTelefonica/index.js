/**
 * @format
 */
import React, {Component} from 'react';

import {AppRegistry} from 'react-native';
import AppContainer from './config/router.config';

import {name as appName} from './app.json';

    <AppContainer />

AppRegistry.registerComponent(appName, () => AppContainer);