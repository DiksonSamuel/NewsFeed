import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../../utils/routes';

import News from './news';
import Bookmark from './bookmark';
import Profile from './profile';

import * as Icon from "react-native-feather";

const Tab = createBottomTabNavigator();

const Home = (props) => {

  return (
    <Tab.Navigator screenOptions={{  }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon.Home color={color} height={size} width={size} />
          ),
        }}
        name={routes.news}
        component={News}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon.Bookmark color={color} height={size} width={size} />
          ),
        }}
        name={routes.bookmark}
        component={Bookmark} />
      <Tab.Screen
        name={routes.profile}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon.User color={color} height={size} width={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Home;