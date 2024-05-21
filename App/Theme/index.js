import { DefaultTheme } from 'react-native-paper';

/*  APP SPECIFIC COLORS  */
export const Colors = {
  // Common
  transparent: 'rgba(0,0,0,0)',
  text: '#3f3f3f',
  tintGrey: '#777b',
  lightGrey: '#6B7280',
  foreground: '#FFFFFF',
  background: '#f5f5f5',
  success: '#28a745',
  error: '#dc3545',
  primary: '#177AE2',
  primaryLight: '#177AE250',
  secondary: '#14003B',
  red: '#FF0000'
};
export const CardShadow = {
  shadowColor: Colors.primary,
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6
};
/*  APP SPECIFIC FONTS  */
export const FontFamily = {
  Bold: 'SofiaPro-Bold',
  SemiBold: 'SofiaPro-SemiBold',
  Medium: 'SofiaPro-Medium',
  Regular: 'SofiaPro',
  Light: 'SofiaPro-Light'
};

/*  REACT NATIVE PAPER THEME  */
const fontConfig = {
  regular: { fontFamily: FontFamily.Regular },
  medium: { fontFamily: FontFamily.Medium },
  light: { fontFamily: FontFamily.Light },
  thin: { fontFamily: FontFamily.Light }
};

const colorsConfig = {
  ...DefaultTheme.colors,
  primary: Colors.primary,
  accent: Colors.secondary,
  text: Colors.text
};

export const theme = {
  ...DefaultTheme,
  roundness: 6,
  fonts: fontConfig,
  colors: colorsConfig
};
