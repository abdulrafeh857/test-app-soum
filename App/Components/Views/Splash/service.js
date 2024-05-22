import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const useService = props => {
  const isFocused = useIsFocused();
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Products');
    }, 2000);
  }, [isFocused]);

  return {};
};

export default useService;
