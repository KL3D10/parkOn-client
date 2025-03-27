import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen from '@/screens/authenticated/settings/SettingsScreen'
import ProfileScreen from '@/screens/authenticated/settings/ProfileScreen'

const Stack = createNativeStackNavigator()

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStack