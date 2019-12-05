import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {LAYOUT} from '../../constants/app.constant';

import {styles} from './cardDetalhes.styles';

const ContatosDetalhes = props => {
  const {item} = props;
  return (
    <View style={styles.containerDetalhes}>
      <View style={styles.detalhes}>
        <View style={styles.foto}>
          <Text>FOTO</Text>
        </View>
        <View style={styles.containerNome}>
          <Text style={styles.textNome}>{item.nome}</Text>
        </View>
        <View style={styles.containerInformacoes}>
          <Text style={styles.text}>{item.telefone}</Text>
          <Text style={styles.text}>{item.cargo}</Text>
          <Text style={styles.text}>{item.grau}</Text>
        </View>
      </View>
    </View>
  );
};
export default class ContatosDetalhesView extends Component {
  constructor(props) {
    super(props);

    let contatos = props.navigation.getParam('contatos');

    let contatoSelecionado = props.navigation.getParam('contatoSelecionado');

    this.state = {
      dados: contatos,
      ativo: contatoSelecionado,
    };
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ContatosDetalhes
            item={this.state.dados.filter(i => i.id === this.state.ativo)[0]}
          />
        </View>
      </ScrollView>
    );
  }
}
