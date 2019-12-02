import {StyleSheet} from 'react-native';

import {LAYOUT} from '../../constants/app.constant';
import {px, pxW, pxH} from '../../utils/functions.util';

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },
  scrollView: {},
  container: {
    flex: 1,
    backgroundColor: 'rgba(109,109,109,0.7)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: px(40),
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 20,
  },
  logoTributario: {
    width: px(190),
    height: px(80),
  },
  containerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(55,119,187,0.9)',
  },
  informacoes: {
    fontSize: px(11),
    color: 'white',
    textAlign: 'center',
    lineHeight: px(20),
    fontWeight: '500',
    paddingVertical: px(20),
    // fontFamily: LAYOUT.FONTS.frutigerLight,
  },
  subtitulo: {
    paddingTop: px(10),
    fontSize: px(12),
    color: 'gray',
    textAlign: 'center',
    lineHeight: px(15),
    fontWeight: '500',
    paddingHorizontal: px(25),
    // fontFamily: LAYOUT.FONTS.frutigerLight,
  },
  containerLogin: {
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderBottomColor: 'gray',
    borderRadius: 20,
    paddingVertical: px(15),
    marginBottom: px(80),
    alignItems: 'center',
  },
  button: {
    backgroundColor: LAYOUT.COLORS.secondary,
    width: '90%',
    paddingVertical: pxH(10),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: px(14),
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    // fontFamily: LAYOUT.FONTS.frutigerBold,
  },
  hyperlink: {
    fontSize: px(18),
    color: LAYOUT.COLORS.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingVertical: pxH(15),
    // fontFamily: LAYOUT.FONTS.frutigerLight,
  },
  modalScrollView: {},
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: pxH(30),
    paddingBottom: pxH(30),
    paddingHorizontal: pxW(20),
    backgroundColor: LAYOUT.COLORS.background,
  },
  modalTitulo: {
    fontSize: px(30),
    lineHeight: px(36),
    color: LAYOUT.COLORS.primary,
    textAlign: 'center',
  },
  modalLottieViewContainer: {
    alignItems: 'center',
    marginVertical: pxH(30),
    marginBottom: pxH(30),
  },
  modalLottieView: {
    height: pxH(250),
  },
  modalTexto: {
    width: '100%',
    fontSize: px(18),
    color: LAYOUT.COLORS.primary,
    textAlign: 'left',
    lineHeight: px(22),
    // fontFamily: LAYOUT.FONTS.frutigerLight,
  },
  modalButton: {
    backgroundColor: LAYOUT.COLORS.secondary,
    width: '100%',
    marginTop: pxH(40),
    paddingVertical: pxH(15),
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: px(18),
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: LAYOUT.COLORS.secondary,
    width: '100%',
    marginHorizontal: pxH(15),
    paddingVertical: pxH(15),
  },
  containerFooter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    color: 'white',
    fontSize: px(13),
    fontWeight: '500',
    textAlign: 'center',
    // fontFamily: LAYOUT.FONTS.frutigerLight,
  },
});

export {styles};
