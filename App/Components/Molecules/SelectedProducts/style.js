import { Dimensions, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { CardShadow, Colors, FontFamily } from 'Theme';

const { width } = Dimensions.get('window');

const useStyles = () =>
  StyleSheet.create({
    listView: {
      alignSelf: 'center',
      backgroundColor: Colors.background,
      padding: 10,
      borderRadius: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      width: width * 0.9,
      marginBottom: 50,
      ...CardShadow
    },
    itemView: {
      backgroundColor: Colors.lightGrey + '30',
      padding: 5,
      borderRadius: 5,
      margin: 5
    },
    itemText: {
      fontFamily: FontFamily.Medium,
      fontSize: responsiveFontSize(2),
      color: Colors.text,
      textAlign: 'center'
    },
    iconStyle: {
      position: 'absolute',
      right: -7,
      top: -7
    }
  });

export default useStyles;
