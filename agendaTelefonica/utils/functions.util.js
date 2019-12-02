import {Dimensions, Platform} from 'react-native';
let {width, height} = Dimensions.get('window');

const IS_IPHONE_X = height === 812 || height === 896; // SCREEN_HEIGHT
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const debugResponsive = false;
const layoutOriginal = {w: 375, h: 812};

const fatorW = w => w / layoutOriginal.w; // (width < 320 ? 375 : width) / 375
let fatorH = h => h / layoutOriginal.h; // (height < 480 ? 480 : height) / 812

const px = w => w * 1.096;
const pxW = w => w * fatorW(width);
let pxH = h => h * fatorH(height);

if (debugResponsive) {
  let deviceTarget = {w: 320, h: 480};

  width = px(deviceTarget.w);
  height = px(deviceTarget.h);

  pxH = h => h * fatorH(deviceTarget.h);

  height -= 20 + 60; // 20 = StatusBar, 60 = Cabeçalho
}

const formatMoney = (number, places, symbol, thousand, decimal) => {
  places = !isNaN((places = Math.abs(places))) ? places : 2;
  symbol = symbol !== undefined ? symbol : '$';
  thousand = thousand || ',';
  decimal = decimal || '.';
  let negative = number < 0 ? '-' : '';
  let i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + '';
  let j;
  j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    symbol +
    negative +
    (j ? i.substr(0, j) + thousand : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
    (places
      ? decimal +
        Math.abs(number - i)
          .toFixed(places)
          .slice(2)
      : '')
  );
};

export {
  HEADER_HEIGHT,
  debugResponsive,
  width as widthScreen,
  height as heightScreen,
  px,
  pxW,
  pxH,
  formatMoney,
};
