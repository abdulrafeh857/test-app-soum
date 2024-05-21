import React from 'react';
import { Image } from 'react-native';
import useService from './service';
import useStyles from './styles';
import { Screen } from '@Templates';
import { Colors } from '@Theme';
import { ActivityIndicator } from 'react-native-paper';

const Splash = props => {
  const {} = useService(props);
  const { image } = useStyles();

  return (
    <>
      <Screen>
        <Image style={image} resizeMethod="resize" resizeMode="contain" source={require('@Images/logo.png')} />
        <ActivityIndicator size={35} color={Colors.primary} />
      </Screen>
    </>
  );
};

export default Splash;
