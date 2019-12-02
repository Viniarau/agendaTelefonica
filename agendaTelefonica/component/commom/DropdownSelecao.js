import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {px, pxW, pxH, widthScreen} from '../../utils/functions.util';
import {LAYOUT, IS_IOS} from '../../constants/app.constant';
import {Dropdown} from 'react-native-material-dropdown';

const CampoSelecao = props => {
  const {data, onChange, updateState} = props;

  useEffect(() => {
    // Ao montar o componente

    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <Dropdown
      data={data}
      value={''}
      valueExtractor={({id}) => id}
      labelExtractor={({nome}) => {
        return nome;
      }}
      textColor={LAYOUT.COLORS.text}
      baseColor={LAYOUT.COLORS.text}
      inputContainerStyle={styles.inputDropdown}
      labelHeight={10}
      labelPadding={0}
      dropdownOffset={{top: px(50)}}
      onChangeText={nome => {
        onChange(updateState, nome);
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  inputDropdown: {
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: LAYOUT.COLORS.primary,
    borderBottomColor: LAYOUT.COLORS.primary,
    paddingLeft: px(10),
  },
});

export default CampoSelecao;
