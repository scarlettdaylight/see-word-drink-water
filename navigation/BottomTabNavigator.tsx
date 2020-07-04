import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import StatisticScreen from '../screens/StatisticScreen';
import AddRecordScreen from "../screens/AddRecordScreen"
import {HomeParamList, StatisticParamList} from "../types"

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cup-water" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Statistic"
        component={StatisticNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-line" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Drink water now' }}
      />
      <HomeStack.Screen
        name="AddRecordScreen"
        component={AddRecordScreen}
        options={{ headerTitle: 'Drinking' }}
      />
    </HomeStack.Navigator>
  );
}

const StatisticStack = createStackNavigator<StatisticParamList>();

const StatisticNavigator = () => {
  return (
    <StatisticStack.Navigator>
      <StatisticStack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{ headerTitle: 'Statistic' }}
      />
    </StatisticStack.Navigator>
  );
}
