import * as React from 'react';
import {NativeModules, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../consts/colors';

Icon.loadFont();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CarsApp;
