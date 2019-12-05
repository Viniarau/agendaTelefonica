import React, { Component } from 'react';
import { StyleSheet, StatusBar, ActivityIndicator, View } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { LAYOUT } from '../constants/app.constant';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
        const autenticado = await AsyncStorage.getItem('autenticado')
        if(autenticado) {
            this.props.navigation.navigate('Home');
        }
        else {
            this.props.navigation.navigate('Login');
        }
      } catch (e) {
        console.log(e.message);
      } 
    //   SplashScreen.hide();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={true}
        />
        <ActivityIndicator size="large" color={'#fff'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LAYOUT.COLORS.primary
  }
});
