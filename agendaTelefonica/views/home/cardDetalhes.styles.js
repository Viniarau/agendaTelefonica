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
    paddingTop: px(35),
    paddingHorizontal: px(25),
    height: '100%',
  },
  containerDetalhes: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: px(5),
    padding: px(20)
  },
  detalhes: {
    backgroundColor: LAYOUT.COLORS.primary,
    width: '100%',
    height: '100%',
    padding: px(18),
    paddingHorizontal: px(20),
    borderRadius: px(10),
    justifyContent: 'space-between'
  },
  foto: {
    alignItems: 'center',
    paddingTop: px(20),
    paddingBottom: px(30)
  },
  textNome: {
    fontSize: px(20),
    fontWeight: '600'
  },
  text: {
    fontSize: px(15),
    fontWeight: '600',
    paddingTop: px(20),
  },
  containerNome: {
    alignItems: 'center',
    paddingBottom: px(20)
  },
  containerInformacoes: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: px(20),
    paddingBottom: px(20),
    borderWidth: px(2),
    borderRadius: px(10),
    borderColor: LAYOUT.COLORS.secondary,
  }
});

export {styles};
