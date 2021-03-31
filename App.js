import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import ImportantTask from './components/DayPlanner';
import DayPlanner from './components/ImportantTask';
import Calendar from './components/Calendar';

import store from './redux/store';
import { Provider } from 'react-redux';


export default function App () {
  const Stack = createStackNavigator ();
  return (
    <Provider store={store}>

      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DayPlanner" component={DayPlanner} />
          <Stack.Screen name="ImportantTask" component={ImportantTask} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
   
    </Provider>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
