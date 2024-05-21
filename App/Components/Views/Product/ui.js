import React from 'react';
import useService from './service';
import useStyles from './styles';
import { Image, Text, View } from 'react-native';
import { Screen } from '@Templates';
import { SelectedProducts, TreeView } from '@Components/Molecules';

const Products = props => {
  const { productCategoryList } = useService(props);
  const { image, textHeader, bottomText, listView } = useStyles();

  return (
    <>
      <Screen>
        <Image style={image} resizeMethod="resize" resizeMode="contain" source={require('@Images/logo.png')} />
        <Text style={textHeader}>Browse Products</Text>

        <View style={listView}>
          <TreeView data={productCategoryList} />
        </View>

        <Text style={bottomText}>Selected Variants</Text>
        <SelectedProducts />
      </Screen>
    </>
  );
};

export default Products;
