import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import {LAYOUT} from '../../constants/app.constant';
import {px} from '../../utils/functions.util';

const CardContato = props => {
  //   const [foo, setFoo] = useState(false);
  const {item} = props;

  useEffect(() => {
    // Ao montar o componente
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>foto</Text>
        <View style={styles.informaçoes}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.telefone}>{item.telefone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: LAYOUT.COLORS.primary,
    borderWidth: 0.25,
    borderRadius: 5,
    width: '100%',
    paddingVertical: px(15),
    paddingHorizontal: px(25),
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  informaçoes: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nome: {
    fontSize: px(16),
    fontWeight: '700',
    paddingBottom: px(5),
  },
  telefone: {
    fontSize: px(14),
    fontWeight: '500',
  },
});

export default CardContato;
