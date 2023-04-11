/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './src/utils/routes';
import { createTable, getDBConnection, getCurrentUser } from './src/dbQueries';

import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';
import NewsDetails from './src/screens/newsDetails';

const Stack = createNativeStackNavigator();

const App = () => {

  const [statusLoaded, setStatusLoaded] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  useEffect(() => {
    initializeDB()
    getUserLoggedIn()
  }, [])

  const initializeDB = async () => {
    const db = await getDBConnection();
    await createTable(db);
  }

  const getUserLoggedIn = async () => {
    let userData = await getCurrentUser();

    setUserLoggedIn(Object.keys(userData).length > 0 ? true : false);
    setStatusLoaded(true)
  }

  return (
    <>
      {statusLoaded && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={userLoggedIn ? routes.home : routes.login}>
            <Stack.Screen name={routes.login} component={Login} />
            <Stack.Screen name={routes.register} component={Register} />
            <Stack.Screen options={{ headerShown: false }} name={routes.home} component={Home} />
            <Stack.Screen name={routes.newsDetails} component={NewsDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>

  );
}

export default App;