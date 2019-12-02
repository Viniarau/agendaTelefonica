import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOutAlt as faExitSolid} from '@fortawesome/free-solid-svg-icons';

import AuthService from '../services/security/auth.service';

import {LAYOUT} from '../constants/app.constant';
import {px} from '../utils/functions.util';

const HeaderLogout = props => {
  const {navigation} = props;
  const [name, setName] = useState(false);

  AuthService.getCurrentSession().then(auth => {
    let user = auth.user;
    console.log(user);
    setName(user.name);
  });

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
              {text: 'OK', onPress: () => AuthService.logout(navigation)},
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
