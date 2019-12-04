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
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: px(20),
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
  containerCard: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: px(5),
  },
  button: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: LAYOUT.COLORS.secondary,
    padding: px(18),
    borderRadius: px(35),
    bottom: px(20),
    right: px(20)
  },
  textButton: {
    color: '#fff',
    fontWeight: '800',
    fontSize: px(22),
  }
});

export {styles};
