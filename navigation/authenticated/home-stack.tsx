import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@/screens/authenticated/home/HomeScreen'
import SelectedParkingScreen from '@/screens/authenticated/home/SelectedParkingScreen'
import PaymentScreen from '@/screens/authenticated/home/PaymentScreen'
import PaymentSuccessModal from '@/screens/authenticated/home/PaymentSuccessModal'
import PaymentInvoiceModal from '@/screens/authenticated/home/PaymentInvoiceModal'
import AuthenticationModal from '@/screens/unauthenticated/AuthenticationModal'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SelectedParkingScreen' component={SelectedParkingScreen} />
            <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
            <Stack.Screen
                name='PaymentSuccessModal'
                component={PaymentSuccessModal}
                options={{ presentation: 'transparentModal', animation: 'fade', headerTransparent: true }}
            />
            <Stack.Screen
                name='PaymentInvoiceModal'
                component={PaymentInvoiceModal}
                options={{ presentation: 'transparentModal', headerTransparent: true, animation:  'slide_from_bottom' }}
            />
            <Stack.Screen
                name='AuthenticationModal'
                component={AuthenticationModal}
                options={{ presentation: 'fullScreenModal', headerTransparent: true, animation:  'slide_from_bottom' }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})