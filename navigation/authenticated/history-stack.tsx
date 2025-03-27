import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HistoryScreen from '@/screens/authenticated/history/HistoryScreen'

const Stack = createNativeStackNavigator()

const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HistoryScreen' component={HistoryScreen} />
    </Stack.Navigator>
  )
}

export default HistoryStack

const styles = StyleSheet.create({})