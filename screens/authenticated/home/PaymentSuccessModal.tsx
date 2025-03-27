import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Colors from '@/constants/Colors';
import LottieView from 'lottie-react-native';
import { BlurView } from 'expo-blur';

const PaymentSuccessModal = ({ navigation }: { navigation: any }) => {
    const animation = useRef<LottieView>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.goBack()
            navigation.navigate("PaymentInvoiceModal")
        }, 3500);

        return () => clearTimeout(timeoutId);
    }, [navigation])

    return (
        <BlurView intensity={8} style={styles.container} tint='light' >
            <View style={styles.card}>
                <LottieView
                    ref={animation}
                    autoPlay
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={require('@/assets/animations/paymentSuccess.json')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Successful!</Text>
                    <Text style={styles.text}>Successfully made payment for your parking</Text>
                </View>
            </View>
        </BlurView>
    )
}

export default PaymentSuccessModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#f3fff9',
        borderRadius: 20,
        height: 380,
        width: 350,
        margin: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 8,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        gap: 10,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: 'center'
    },
    textContainer: {
        alignItems: 'center',
        gap: 5
    },
    headerText: {
        fontFamily: 'OpenSansBold',
        color: Colors.blackSecondary,
        fontSize: 22
    },
    text: {
        fontFamily: 'OpenSans',
        color: Colors.blackSecondary,
        fontSize: 12
    }
})