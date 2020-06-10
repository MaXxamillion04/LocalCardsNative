import React from 'react';
import {View, Text} from 'react-native';
import gS from './src/bits/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import NewUserScreen from './src/screens/NewUserScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const AuthNav = createStackNavigator();

export function Auth({navigation}) {
  const AuthNav = createStackNavigator();
  return (
    <AuthNav.Navigator>
      <AuthNav.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
        styles={gS.Container}
      />
      <AuthNav.Screen name="Sign-Up" component={NewUserScreen} />
    </AuthNav.Navigator>
  );
}

export default Auth;
