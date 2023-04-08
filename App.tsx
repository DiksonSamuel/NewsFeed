/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './src/utils/routes';

import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';
import NewsDetails from './src/screens/newsDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.login} component={Login}  />
        <Stack.Screen name={routes.register} component={Register} />
        <Stack.Screen name={routes.home} component={Home} />
        <Stack.Screen name={routes.newsDetails} component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;