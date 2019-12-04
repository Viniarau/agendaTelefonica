import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {LAYOUT} from '../../constants/app.constant';

import CardContato from '../../component/commom/CardContato';
import CONTATOSMOCK from '../../assets/mock/contatos.mock';
import CadastrarContato from '../../component/commom/CadastrarContato';

import {styles} from './styles';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contatos: CONTATOSMOCK,
      showCadastro: false,
    };
  }

  novoContato() {
    this.setState({showCadastro: true});
  }

  onChangeFormField = (name, value) => {
    let formEdit = {...this.state.contatos};
    formEdit[name] = value;
    this.setState({contatos: formEdit});
  };

  cadastrar() {
    CONTATOSMOCK.push(this.state.contatos);
    this.setState({showCadastro: false});
  }

  render() {
    return (
      <View style={styles.scrollView}>
        {this.state.showCadastro ? (
          <CadastrarContato
            item={this.state.contatos}
            onChangeFormField={this.onChangeFormField}
            salvar={this.cadastrar}
          />
        ) : (
          <ScrollView style={styles.scrollView}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={LAYOUT.COLORS.primary}
              translucent={false}
            />
            <View style={styles.container}>
              <View style={styles.containerCards}>
                {this.state.contatos && this.state.contatos.length
                  ? this.state.contatos.map((item, i = 0) => {
                      i++;
                      return (
                        <View style={styles.containerCard}>
                          <CardContato key={i} item={item} />
                        </View>
                      );
                    })
                  : null}
              </View>
            </View>
          </ScrollView>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.novoContato()}>
          <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
