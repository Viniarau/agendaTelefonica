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

  containerTitle: {
    width: '100%',
    // fontFamily: LAYOUT.FONTS.frutigerBold,
  },
  text: {
    color: 'gray',
    fontWeight: '600',
    fontSize: px(18),
    // fontFamily: LAYOUT.FONTS.frutigerBold,
  },
});

export {styles};
