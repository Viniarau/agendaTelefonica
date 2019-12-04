import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import LoginView from '../views/login';
import HomeView from '../views/home';
import {LAYOUT} from '../constants/app.constant';

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

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeView,
      navigationOptions: () => ({
        // header: null,
        title: 'Contatos', 
        headerStyle: {
          backgroundColor: LAYOUT.COLORS.secondary,
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: () => ({
      header: null,
    }),
  },
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
  return <AppContainer />;
};

export default App;
