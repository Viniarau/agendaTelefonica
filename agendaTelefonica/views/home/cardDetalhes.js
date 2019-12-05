import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { LAYOUT } from '../../constants/app.constant';

import { styles } from './cardDetalhes.styles';

export default class ContatosDetalhesView extends Component {
    constructor(props) {
        super(props);

        let contatos = props.navigation.getParam('contatos');

        this.state = {
            dados: contatos,
        };
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                  <Text style={styles.text}>{this.state.dados.nome}</Text>
                  <Text style={styles.text}>{this.state.dados.telefone}</Text>
                </View>
            </ScrollView>
        );
    }
}
