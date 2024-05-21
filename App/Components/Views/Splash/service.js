import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const useService = props => {
  const f = useIsFocused();
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Products');
    }, 2000);
  }, [f]);

  return {};
};

export default useService;
