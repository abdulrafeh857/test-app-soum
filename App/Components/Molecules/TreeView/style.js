import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors, FontFamily } from 'Theme';

export default StyleSheet.create({
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: FontFamily.Medium,
    fontSize: responsiveFontSize(2),
    color: Colors.tintGrey,
    marginVertical: 20
  },
  itemText: {
    fontFamily: FontFamily.Medium,
    fontSize: responsiveFontSize(2.3),
    color: Colors.text
  },
  descText: {
    fontFamily: FontFamily.Regular,
    fontSize: responsiveFontSize(2),
    color: Colors.lightGrey
  },
  itemView: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  itemViewBrand: {
    alignSelf: 'flex-end',
    marginLeft: responsiveWidth(10),
    width: '90%',
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  itemViewModel: {
    alignSelf: 'flex-end',
    marginLeft: responsiveWidth(15),
    width: '80%',
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  itemViewVariant: {
    alignSelf: 'flex-end',
    marginLeft: responsiveWidth(20),
    width: '70%',
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  }
});
