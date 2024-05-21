import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getProductCategories } from 'Api';
import { validateResponse } from 'Functions';

const useService = props => {
  const [productCategoryList, setProductCategoryList] = useState([]);

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = () => {
    let response = getProductCategories();
    let { validated, error } = validateResponse(response);

    if (validated) {
      setProductCategoryList(response?.data);
    } else {
      Alert.alert('Error', error);
    }
  };

  return { productCategoryList };
};

export default useService;
