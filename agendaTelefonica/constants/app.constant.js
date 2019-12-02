import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const IS_IOS = Platform.OS === 'ios';
const IS_ANDROID = !IS_IOS;

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const ENVIROMENT = 'HML'; // 'DEV', 'HML', 'PROD'

const SAML_INTERNO = {
  tenant: 'f8f03f04-d496-4994-a0a7-f4f8e4d37148',
  clientId: '628f4855-0840-4208-bb10-e9c21bdcb648',
  redirectUri: 'http://localhost:4200/',
  scope: 'User.ReadBasic.All', // openid%20offline_access%20profile%20https%3A%2F%2Fgraph.microsoft.com%2F.default
  nonce: '938c178c-1331-4505-a6ec-20d8b5b3598a',
};

const SAML_CLIENTE = {
  tenant: 'eef8f41a-1fa3-486c-9dc3-2fa5f63c9231',
  clientId: 'c2f5e843-08ef-47ab-b60b-8e26cec89c32',
  redirectUri: 'https://web-tributario-hml.azurewebsites.net',
  scope: 'openid profile',
  nonce: 'd9d0b8fb-fb96-43bf-a924-d66b45df6d37',
};

const SENSEDIA = {
  ClientId: '3b559b09-84d7-3cc9-93ac-d152f412b652',
  Authorization:
    'M2I1NTliMDktODRkNy0zY2M5LTkzYWMtZDE1MmY0MTJiNjUyOmY4MjM4YWE1LWIzZjItMzQyZC05ZDI3LTk4NDViNDVjYzFkMA==',
};

const TAG_DESENVOLVIMENTO = 'hml';
const TAG_HOMOLOGACAO = 'hml';
const TAG_PRODUCAO = 'prd';

let SAML, TAG;

if (ENVIROMENT === 'DEV') {
  SAML = SAML_INTERNO;
} else {
  SAML = SAML_CLIENTE;
}

if (ENVIROMENT === 'DEV') {
  TAG = TAG_DESENVOLVIMENTO;
} else if (ENVIROMENT === 'HML') {
  TAG = TAG_HOMOLOGACAO;
} else {
  TAG = TAG_PRODUCAO;
}

const LAYOUT = {
  FONTS: {
    frutigerBold: Platform.OS === 'ios' ? 'Frutiger-Bold' : 'Frutiger Bold',
    frutigerLight: Platform.OS === 'ios' ? 'Frutiger-Light' : 'Frutiger Light',
  },
  COLORS: {
    primary: '#D3D3D3',
    secondary: '#2E8B51',
    text: '#5A5858',
    background: 'white',
  },
};

const ENUM_ESFERAIMPOSTO = {
  '1': {
    label: 'FEDERAL',
  },
  '2': {
    label: 'ESTADUAL',
  },
  '3': {
    label: 'MUNICIPAL',
  },
};

const ENUM_GRAURISCO = {
  '1': {
    RISCO: 'Alto',
  },
  '2': {
    RISCO: 'Médio',
  },
  '3': {
    RISCO: 'Baixo',
  },
};

const ENUM_ESTADO = {
  '0': {
    UF: '',
  },
  '1': {
    UF: 'AC',
  },
  '2': {
    UF: 'AL',
  },
  '3': {
    UF: 'AM',
  },
  '4': {
    UF: 'AP',
  },
  '5': {
    UF: 'BA',
  },
  '6': {
    UF: 'CE',
  },
  '7': {
    UF: 'DF',
  },
  '8': {
    UF: 'ES',
  },
  '9': {
    UF: 'GO',
  },
  '10': {
    UF: 'MA',
  },
  '11': {
    UF: 'MG',
  },
  '12': {
    UF: 'MS',
  },
  '13': {
    UF: 'MR',
  },
  '14': {
    UF: 'PA',
  },
  '15': {
    UF: 'PB',
  },
  '16': {
    UF: 'PE',
  },
  '17': {
    UF: 'PI',
  },
  '18': {
    UF: 'PR',
  },
  '19': {
    UF: 'RJ',
  },
  '20': {
    UF: 'RN',
  },
  '21': {
    UF: 'RO',
  },
  '22': {
    UF: 'RR',
  },
  '23': {
    UF: 'RS',
  },
  '24': {
    UF: 'SC',
  },
  '25': {
    UF: 'SE',
  },
  '26': {
    UF: 'SP',
  },
  '27': {
    UF: 'TO',
  },
};

const ENUM_TIPOCERTIDAO = [
  {id: 1, nome: 'CND ESTADUAL - ANTT'},
  {id: 2, nome: 'CND MUNICIPAL - ANTT'},
  {id: 3, nome: 'CND FEDERAL E PREV - ANTT'},
  {id: 4, nome: 'CND ESTADUAL'},
  {id: 5, nome: 'CND MUNICIPAL'},
  {id: 6, nome: 'CND FEDERAL E PREV'},
  {id: 7, nome: 'CND DÍVIDA ATIVA ESTADUAL - ANTT'},
  {id: 8, nome: 'CND DÍVIDA ATIVA ESTADUAL'},
  {id: 9, nome: 'CRFG'},
  {id: 10, nome: 'CRFG - ANTT'},
  {id: 11, nome: 'CND MUNICIPAL - FILIAL'},
  {id: 12, nome: 'CND ESTADUAL - FILIAL'},
  {id: 13, nome: 'CND DÍVIDA ATIVA ESTADUAL - FILIAL'},
];

export {
  IS_IOS,
  IS_ANDROID,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_IPHONE_X,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  ENVIROMENT,
  SAML,
  SENSEDIA,
  TAG,
  LAYOUT,
  ENUM_ESFERAIMPOSTO,
  ENUM_GRAURISCO,
  ENUM_ESTADO,
  ENUM_TIPOCERTIDAO,
};
