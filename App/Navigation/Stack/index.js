import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useStyles from './styles';
import { SplashScreen, ProductsScreen } from '@Views';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { headerHidden } = useStyles();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} {...headerHidden} />
        <Stack.Screen name="Products" component={ProductsScreen} {...headerHidden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
