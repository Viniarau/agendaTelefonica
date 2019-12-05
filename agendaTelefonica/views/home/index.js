import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { LAYOUT } from '../../constants/app.constant';

import CardContato from '../../component/commom/CardContato';
import CONTATOSMOCK from '../../assets/mock/contatos.mock';
import CadastrarContato from '../../component/commom/CadastrarContato';

import { styles } from './styles';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contatos: CONTATOSMOCK,
      contatosAdd: [],
      showCadastro: false,
      item: [],
    };
  }

  novoContato() {
    this.setState({ showCadastro: true });
  }

  onChangeFormField = (name, value) => {
    let formEdit = { ...this.state.contatosAdd };
    formEdit[name] = value;
    this.setState({ contatosAdd: formEdit });
  };

    cadastrar = async () => {
    await this.salvar();
    this.state.contatos.push(this.state.contatosAdd);
    this.setState({ showCadastro: false });
  }

  salvar = () => {
    // this.onChangeFormField({id: this.state.id});
    // this.state.id += 1;
  }

  toBack = () => {
    console.warn('teste');
    this.setState({ showCadastro: false });
  }

  render() {
    return (
      <View style={styles.scrollView}>
        {this.state.showCadastro ? (
          <CadastrarContato
            item={this.state.contatos}
            onChangeFormField={this.onChangeFormField}
            salvar={this.cadastrar}
            toBack={this.toBack}
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
                          <CardContato key={i} item={item} handlePress={() =>
                            this.props.navigation.navigate('ContatosDetalhes', {
                              contatoSelecionado: item.id,
                              contatos: this.state.contatos,
                            })} />
                        </View>
                      );
                    })
                    : null}
                </View>
              </View>
            </ScrollView>
          )}
        {!this.state.showCadastro ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.novoContato()}>
            <Text style={styles.textButton}> + </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
