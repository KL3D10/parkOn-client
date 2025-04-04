import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthenticationModal from '@/screens/unauthenticated/AuthenticationModal'

const Stack = createNativeStackNavigator()

const VerificationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='AuthenticationModal' component={AuthenticationModal} />
        </Stack.Navigator>
    )
}

export default VerificationStack