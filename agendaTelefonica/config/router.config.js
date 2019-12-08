import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import LoginView from '../views/login';
import HomeView from '../views/home';
import ContatosDetalhesView from '../views/home/cardDetalhes.js';
import AuthLoadingScreen from '../views/authLoadingScreen';
// import HeaderLogout from '../component/header-logout.component';

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
      navigationOptions: ({navigation}) => ({
        // header: null,
        title: 'Contatos', 
        headerStyle: {
          backgroundColor: LAYOUT.COLORS.secondary,
        },
      }),
    },
    ContatosDetalhes: {
      screen: ContatosDetalhesView,
      navigationOptions: () => ({
        // header: null,
        title: 'Contato Detalhe', 
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
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const App = props => {
  return <AppContainer />;
};

export default App;
