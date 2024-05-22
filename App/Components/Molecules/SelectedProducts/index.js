import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useService from './service';
import useStyles from './style';
import styles from '../TreeView/style';
import { setSelectedProductsSlice } from 'Store/Redux/selected';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'Theme';

const SelectedProducts = () => {
  const { dispatch, selectedProducts } = useService();
  const { listView, itemView, itemText, iconStyle } = useStyles();

  return (
    <>
      {selectedProducts.length > 0 ? (
        <View style={listView}>
          {selectedProducts.map((item, index) => (
            <TouchableOpacity
              style={itemView}
              onPress={() => {
                let arr = [...selectedProducts];
                arr.splice(index, 1);
                dispatch(setSelectedProductsSlice(arr));
              }}>
              <Text style={itemText} key={index}>
                {item.model} {item.variant}
              </Text>
              <Icon name="close-circle" size={20} color={Colors.lightGrey} style={iconStyle} />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={styles.text}>No Item Selected...</Text>
      )}
    </>
  );
};

export default SelectedProducts;
