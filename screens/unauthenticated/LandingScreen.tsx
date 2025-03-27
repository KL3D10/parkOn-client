import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocationObject } from 'expo-location'
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useNavigation } from '@react-navigation/native';


const LandingScreen = ({ navigation }: { navigation: any }) => {

    const [location, setLocation] = useState<LocationObject | null>(null);
    const [locationDenied, setLocationDenied] = useState(false);

    const getPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setLocationDenied(true)
            return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setLocationDenied(false)
        navigation.navigate('OnboardingScreen')
    };

    useEffect(() => {
        getPermissions()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('@/assets/images/landing/landingCircles.png')} style={styles.imageBackground} resizeMode='contain'>
                <Image source={require('@/assets/images/logo/logoParkOnBig.png')} resizeMode='contain' />
            </ImageBackground>
            {locationDenied && <View style={{ width: '100%', paddingHorizontal: 8, gap: 20 }}>
                <Text style={[defaultStyles.textBold22, { color: 'white' }]}>ParkOn requires Location Permissions</Text>
                <Text style={[defaultStyles.textRegular16, { color: 'white' }]}>Please grant location permissions to continue using the app</Text>
                <TouchableOpacity style={styles.button} onPress={() => getPermissions()}>
                    <Text style={styles.buttonText}>Grant Location</Text>
                </TouchableOpacity>
            </View>}
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.blackBackground,
        gap: 30
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 322,
        height: 322
    },
    button: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#2C2B2D',
        fontSize: 16,
        fontFamily: 'OpenSans'
    }
})