import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
// import JailMonkey from 'jail-monkey';

import {LAYOUT} from '../../constants/app.constant';

import {styles} from './styles';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'Vinicius',
      senha: '123',
    };
  }

  componentDidMount() {}

  showMessage = (title, message, callback) => {
    setTimeout(() => {
      Alert.alert(title, message, [{text: 'OK', onPress: callback}], {
        cancelable: false,
      });
    }, 100);
  };

  _handlerEntrar = () => {
    if (this.state.login === 'Vinicius' && this.state.senha === '123'){
      this.props.navigation.navigate('Home');
    }
    else {
      Alert.alert('Preencha os dados corretamente');
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
          {/* <Image
            source={require('../../assets/img/app-tributario-logo.png')}
            style={styles.logoTributario}
          /> */}
          <View style={styles.containerLogin}>
            <View style={{alignSelf: 'flex-start', width: '100%', paddingBottom: 20, paddingHorizontal: 20}}> 
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: LAYOUT.COLORS.secondary
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
                  borderBottomColor: LAYOUT.COLORS.secondary
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
              <Text style={styles.textFooter}>Agenda simples, rápida e prática em suas mãos.</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
