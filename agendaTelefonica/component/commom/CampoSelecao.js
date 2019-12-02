import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {px, pxW, pxH, widthScreen} from '../../utils/functions.util';
import {LAYOUT} from '../../constants/app.constant';

const CampoSelecao = props => {
  const {item, index, ativo, selecionaItem} = props;

  useEffect(() => {
    // Ao montar o componente
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <View key={item.keySelecao} style={{flex: 1}}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={LAYOUT.COLORS.background}
        style={[styles.item, ativo == index ? styles.itemAtivo : null]}
        onPress={() => selecionaItem(index)}>
        <Text
          style={[
            styles.itemTexto,
            ativo == index ? styles.itemTextoAtivo : null,
          ]}>
          {item.label}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  item: {
    flex: 1,
    paddingVertical: px(10),
    backgroundColor: 'rgba(181, 181, 181, 0)',
    borderColor: LAYOUT.COLORS.primary,
    borderWidth: 0.3,
  },
  itemAtivo: {
    backgroundColor: LAYOUT.COLORS.primary,
    borderColor: LAYOUT.COLORS.primary,
    paddingTop: px(10),
    marginTop: -4,
    marginLeft: -4,
    borderRadius: 5,
  },
  itemTexto: {
    // fontFamily: LAYOUT.FONTS.frutigerLight,
    fontSize: px(13),
    textAlign: 'center',
    color: LAYOUT.COLORS.text,
    fontWeight: '600',
  },
  itemTextoAtivo: {
    // fontFamily: LAYOUT.FONTS.frutigerBold,
    fontSize: px(15),
    color: '#fff',
    fontWeight: '600',
  },
});

export default CampoSelecao;
