import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import RegisterCar from '../pages/Register';

const Stack = createStackNavigator();

const CarsApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterCar}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CarsApp;
