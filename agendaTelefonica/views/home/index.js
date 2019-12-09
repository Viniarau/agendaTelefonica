import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import { LAYOUT } from '../../constants/app.constant';

import CardContato from '../../component/commom/CardContato';
import CONTATOSMOCK from '../../assets/mock/contatos.mock';
import CadastrarContato from '../../component/commom/CadastrarContato';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import { styles } from './styles';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contatos: [],
      form: [
        {
          nome: '',
          telefone: '',
        }
      ],
      showCadastro: false,
      item: [],
    };
  }

  componentDidMount() {
    this.getContatos();
    console.disableYellowBox = true;
  }

  getContatos = async () => {
    const res = await axios.get(`http://localhost:3000/contatos`);
    this.setState({ contatos: res.data });
  }

  novoContato() {
    this.setState({ showCadastro: true });
  }

  onChangeFormField = (name, value) => {
    let formEdit = { ...this.state.form };
    formEdit[name] = value;
    this.setState({ form: formEdit });
  };

  cadastrarContato = async () => {
    let form = this.state.form;
    const res = await axios.post(`http://localhost:3000/contatos`, form);
    this.setState({ contatos: res.data });
    this.setState({ showCadastro: false });

    this.getContatos();
  }

  editarContato = async (form, id) => {
    const res = await axios.put(`http://localhost:3000/contatos/${id}`, form);
    this.setState({ contatos: res.data });
    this.setState({ showCadastro: false });

    this.getContatos();
  }

  toBack = () => {
    this.setState({ showCadastro: false });
  }

  exit = async () => {
    await AsyncStorage.setItem('autenticado', 'false');
    await this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.scrollView}>
        {this.state.showCadastro ? (
          <CadastrarContato
            item={this.state.contatos}
            onChangeFormField={this.onChangeFormField}
            salvar={this.cadastrarContato}
            toBack={this.toBack}
            editar={false}
          />
        ) : (
            <ScrollView style={styles.scrollView}>
              <StatusBar
                barStyle="light-content"
                backgroundColor={LAYOUT.COLORS.primary}
                translucent={false}
              />
              <TouchableOpacity style={styles.logout} onPress={() => this.exit()}>
                <Text>Logout</Text>
              </TouchableOpacity>
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
                              editarContado: this.editarContato,
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
