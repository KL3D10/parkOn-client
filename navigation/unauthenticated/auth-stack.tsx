import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '@/screens/unauthenticated/LandingScreen'
import OnboardingScreen from '@/screens/unauthenticated/OnboardingScreen'
import TermsConditionsScreen from '@/screens/unauthenticated/TermsConditionsScreen'
import GeneralInfo from '@/screens/unauthenticated/GeneralInfo'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='LandingScreen' component={LandingScreen} />
            <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
            <Stack.Screen name='TermsConditionsScreen' component={TermsConditionsScreen} />
            <Stack.Screen name='GeneralInfoScreen' component={GeneralInfo} />
        </Stack.Navigator>
    )
}

export default AuthStack