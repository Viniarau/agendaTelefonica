import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {px, pxW, pxH, widthScreen} from '../../utils/functions.util';
import {LAYOUT, IS_IOS} from '../../constants/app.constant';
import {WebView} from 'react-native-webview';
import environment from '../../services/config/environment';

const urlAnexoPdf = environment.baseUrl[environment.currentEnvironment].urlApi;

const OpenDocument = props => {
  const {url, toBack} = props;

  useEffect(() => {
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <View style={styles.webviewContainer}>
      <TouchableOpacity style={styles.back} onPress={() => toBack()}>
        <Text style={styles.textBack}> {' x '} </Text>
      </TouchableOpacity>
      <WebView
        source={{
          uri: urlAnexoPdf + 'anexo/' + url,
        }}
        cacheEnabled={false}
        javaScriptEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webviewContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  back: {
    position: 'absolute',
    zIndex: 1,
    padding: 0,
    paddingBottom: px(2),
    borderWidth: 1,
    backgroundColor: LAYOUT.COLORS.secondary,
    borderColor: LAYOUT.COLORS.secondary,
    right: 0,
  },
  textBack: {
    fontSize: px(17),
    fontWeight: 'bold',
    // fontFamily: LAYOUT.FONTS.frutigerBold,
    color: '#fff',
  },
});

export default OpenDocument;
