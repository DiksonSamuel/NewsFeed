import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../../utils/routes';

import News from './news';
import Bookmark from './bookmark';
import Profile from './profile';

const Tab = createBottomTabNavigator();

const Home = (props) => {

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={routes.news} component={News} />
      <Tab.Screen name={routes.bookmark} component={Bookmark} />
      <Tab.Screen name={routes.profile} component={Profile} />
    </Tab.Navigator>
  )
}

export default Home;