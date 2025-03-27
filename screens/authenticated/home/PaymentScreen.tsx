import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import HeaderComponent from '@/components/general/headerComponent';
import Carousel from 'react-native-reanimated-carousel';
import { SCREEN_WIDTH } from '@/constants/Screen';
import { CardsData } from '@/assets/data/CardsData';
import PaymentBottomSheet from '@/components/BottomSheets/PaymentBottomSheet';
import CreditCard from '@/components/home/creditCard';

const PaymentScreen = ({ navigation }: { navigation: any }) => {

    const bottomSheetRef = useRef<BottomSheet>(null);

    const onChangeIndex = (index: number) => {
        bottomSheetRef.current?.snapToIndex(index)
    }

    const onConfirm = () => {
        // bottomSheetRef.current?.close()
        navigation.navigate("PaymentSuccessModal")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blackBackground }} edges={['top']}>
            <HeaderComponent />
            <View style={styles.container}>
                <Carousel
                    loop={false}
                    width={SCREEN_WIDTH}
                    height={SCREEN_WIDTH / 2}
                    data={CardsData}
                    mode='parallax'
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item, index }) => (
                        <CreditCard item={item} />
                    )}
                />
                <PaymentBottomSheet ref={bottomSheetRef} onChangeIndex={(index) => onChangeIndex(index)} onConfirm={onConfirm} onBackScreen={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 25,
        gap: 15,
        alignItems: 'center'
    },
    dot: {
        backgroundColor: 'white',
        height: 10,
        width: 10,
        borderRadius: 50
    }
})