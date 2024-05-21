import { Dimensions, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { FontFamily } from 'Theme';

const { width, height } = Dimensions.get('window');

const useStyles = () =>
  StyleSheet.create({
    image: {
      height: 50,
      width: 50,
      marginVertical: height * 0.02,
      alignSelf: 'center'
    },
    textHeader: {
      fontSize: responsiveFontSize(3),
      fontFamily: FontFamily.Medium,
      alignSelf: 'center'
    },
    bottomText: {
      fontSize: responsiveFontSize(2),
      fontFamily: FontFamily.Medium,
      alignSelf: 'center',
      marginTop: height * 0.02
    },
    listView: {
      flex: 1,
      width: width * 0.9,
      alignSelf: 'center'
    }
  });

export default useStyles;
