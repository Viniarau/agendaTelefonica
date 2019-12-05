import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Spinner from 'react-native-loading-spinner-overlay';
// import JailMonkey from 'jail-monkey';

import {LAYOUT} from '../../constants/app.constant';

import {styles} from './styles';

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      senha: '',
    };
  }

  componentDidMount() {
    this.setAsyncStorage();
  }

  setAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('login', 'Viniaug');
      await AsyncStorage.setItem('senha', '123');
    } catch (e) {
      console.log(e.message);
    }
  };

  showMessage = (title, message, callback) => {
    setTimeout(() => {
      Alert.alert(title, message, [{text: 'OK', onPress: callback}], {
        cancelable: false,
      });
    }, 100);
  };

  _handlerEntrar = async () => {
    const loginOK = await AsyncStorage.getItem('login');
    const senhaOk = await AsyncStorage.getItem('senha');
    if (this.state.login === loginOK && this.state.senha === senhaOk) {
      this.props.navigation.navigate('Home');
      await AsyncStorage.setItem('autenticado', 'true');
    } else {
      Alert.alert('Preencha os dados corretamente');
      await AsyncStorage.setItem('autenticado', 'false');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/fundo.jpg')}
        imageStyle={{resizeMode: 'cover'}}
        style={styles.bg}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={LAYOUT.COLORS.primary}
            translucent={false}
          />
          <Spinner
            visible={this.state.processing}
            overlayColor={'rgba(0, 0, 0, 0.4)'}
          />
          <Text style={styles.logo}>Agenda {'\n'} Top.Esp</Text>
          <View style={styles.containerLogin}>
            <View
              style={{
                alignSelf: 'flex-start',
                width: '100%',
                paddingBottom: 20,
                paddingHorizontal: 20,
              }}>
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: LAYOUT.COLORS.secondary,
                }}
                placeholder="Digite seu login"
                onChangeText={login => this.setState({login})}
                value={this.state.login}
              />
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: LAYOUT.COLORS.secondary,
                }}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.button}
              onPress={this._handlerEntrar}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <Text style={styles.subtitulo}>
              Insira seus dados para acessar o app.
            </Text>
          </View>
          <View style={styles.footer}>
            <View styles={styles.containerFooter}>
              <Text style={styles.textFooter}>
                Agenda simples, rápida e prática em suas mãos.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
