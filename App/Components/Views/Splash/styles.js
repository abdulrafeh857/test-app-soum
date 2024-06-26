import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const useStyles = () =>
  StyleSheet.create({
    image: {
      height: 200,
      width: width * 0.8,
      marginTop: height * 0.3,
      marginBottom: height * 0.1,
      alignSelf: 'center'
    }
  });

export default useStyles;
