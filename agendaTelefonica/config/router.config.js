import React from 'react';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'

import LoginView from '../views/login';
import HomeView from '../views/home'


const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginView,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: () => ({
      header: null,
    }),
  },
);

const AppStack = createStackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: () => ({
      // header: null,
      title: 'Home'
    }),
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions: () => ({
      header: null,
    }),
  },
  // Detalhes: {
  //   screen: Detalhes,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

const App = props => {
  return (
    <AppContainer/>
  );
};

export default App;
