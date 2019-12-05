import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {LAYOUT} from '../constants/app.constant';
import {px} from '../utils/functions.util';

const HeaderLogout = props => {
  const {navigation} = props;

  logout = async () => {
    await AsyncStorage.setItem('autenticado', 'false');
    this.props.navigation.navigate('AuthLoading');
  }

  return (
    <View style={{paddingRight: px(20), alignItems: 'flex-end'}}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: '700',
          fontFamily: LAYOUT.FONTS.frutigerBold,
        }}>
        {name}
      </Text>
      <TouchableOpacity
        style={{margin: px(0)}}
        onPress={() => {
          Alert.alert(
            '',
            'Tem certeza que deseja sair?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.logout(navigation)},
            ],
            {cancelable: false},
          );
        }}
        // onPress={() => this.props.navigation.navigate('AuthStack')}
      >
        <FontAwesomeIcon icon={faExitSolid} size={22} style={{color: '#fff'}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderLogout;
