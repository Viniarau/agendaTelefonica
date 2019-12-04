import React, {Component} from 'react';
import {ScrollView, View, Text, StatusBar, TextInput,TouchableOpacity} from 'react-native';
import {LAYOUT} from '../../constants/app.constant';

import CardContato from '../../component/commom/CardContato';
import CONTATOSMOCK from '../../assets/mock/contatos.mock';

import {styles} from './styles';

let INITIAL_FORM = {
  nome: '',
  telefone: '',
};

export default class CadastroView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: INITIAL_FORM,
    };
  }

  

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={false}
        />
        <View style={styles.containerCadastro}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="nome"
            onChangeText={nome => this.onChangeFormField('nome', nome)}
            value={this.state.nome}
          />
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="(ddd) XXXX-XXXX"
            onChangeText={telefone =>
              this.onChangeFormField('telefone', telefone)
            }
            value={this.state.telefone}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => this.cadastrar()}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
