import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './authenticated/main-navigator'
import AuthStack from './unauthenticated/auth-stack'
import { useSelector } from 'react-redux'
import { selectLoginModalState, selectOnboarded, selectToken } from '@/store/auth'
import VerificationStack from './unauthenticated/verification-stack'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {

    const token = useSelector(selectToken)
    const onboarded = useSelector(selectOnboarded)
    const loginModalState = useSelector(selectLoginModalState)

    const HomeNavigation = () => {
        console.log(token + " " + onboarded)
        if (onboarded == null && token == null) {
            return <AuthStack />
        } else if (onboarded == true && token == null && loginModalState == true) {
            return <VerificationStack />
        } else {
            return <MainNavigator />
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator