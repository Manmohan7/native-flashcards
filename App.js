import React from 'react'
import { View, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Entypo } from '@expo/vector-icons';

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12
        }
      }}
    >
      <Tab.Screen
        name='Decks'
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
          tabBarVisible: true,
          tabBarIcon: ({ color }) => <Entypo name="list" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name='NewDeck'
        component={NewDeck}
        options={{
          tabBarLabel: 'New Deck',
          tabBarVisible: true,
          tabBarIcon: ({ color }) => <Entypo name="add-to-list" size={28} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()


function MyNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={MyTabs}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Deck'
          component={Deck}
          options={({ route }) => ({
            title: route.params.id
          })}
        />

        <Stack.Screen
          name='NewCard'
          component={NewCard}
          options={{
            title: 'Create New Card'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <MyNavigator />
    </View>
  )
}