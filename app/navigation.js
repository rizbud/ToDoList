import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screen/home'
import Add from './screen/add'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerTitle: 'Add Schedule',
            headerStyle: {
              backgroundColor: '#1f38de'
            },
            headerTitleStyle: {
              color: '#fff',
              marginLeft: -15,
              fontSize: 22
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation