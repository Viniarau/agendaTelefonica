import {StyleSheet} from 'react-native';

import {LAYOUT} from '../../constants/app.constant';
import {px, pxW, pxH} from '../../utils/functions.util';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: LAYOUT.COLORS.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: px(20),
    paddingHorizontal: px(15),
  },

  containerCards: {
    width: '100%',
    // fontFamily: LAYOUT.FONTS.frutigerBold,
  },
  text: {
    color: 'gray',
    fontWeight: '600',
    fontSize: px(18),
    // fontFamily: LAYOUT.FONTS.frutigerBold,
  },
  containerCadastro: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: px(30),
    paddingTop: px(30),
  },
  textInput: {
    height: 40,
    paddingLeft: 20,
    borderWidth: 0.3,
    borderColor: LAYOUT.COLORS.secondary,
    width: '100%'
  },
  label: {
    color:  LAYOUT.COLORS.secondary,
    fontWeight: '600',
    fontSize: px(15),
    paddingVertical: px(10)
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    position: 'relative',
    backgroundColor: LAYOUT.COLORS.secondary,
    padding: px(5),
    borderRadius: px(35),
    alignItems: 'center',
    marginTop: px(20),
    width: '60%',
  },
  textButton: {
    color: '#fff',
    fontWeight: '800',
    fontSize: px(20),
  },
});

export {styles};
