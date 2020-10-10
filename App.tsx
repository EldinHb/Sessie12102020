/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button, NativeModules
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SessieStack } from './Routes/SessieRoute';
import { HomeScreen } from './SessieScreens/HomeScreen';
import { HeroScreen } from './HeroScreen';

declare const global: {HermesInternal: null | {}};



const App = () => {
  return (
    <>
      <NavigationContainer>
        <SessieStack.Navigator>
          <SessieStack.Screen name='Home' component={HomeScreen}/>
          <SessieStack.Screen name='Hero' component={HeroScreen} options={{headerShown:false}}/>
        </SessieStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
