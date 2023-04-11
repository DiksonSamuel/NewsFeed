/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './src/utils/routes';
import { getUserData, createTable, getDBConnection, saveUserItems, getCurrentUser } from './src/dbQueries';

import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';
import NewsDetails from './src/screens/newsDetails';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    initializeDB()
    getUserData()
  }, [])

  const initializeDB = async () => {
    const db = await getDBConnection();
    await createTable(db);
  }

  const getUserData = async () => {
    let dd = await getCurrentUser();

    alert(JSON.stringify(dd))
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.login} component={Login}  />
        <Stack.Screen name={routes.register} component={Register} />
        <Stack.Screen options={{headerShown: false}} name={routes.home} component={Home} />
        <Stack.Screen name={routes.newsDetails} component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;