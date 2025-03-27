import { defaultStyles } from "@/constants/Styles";
import { PaymentSheetEnum } from "@/helpers/enums";
import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput, BottomSheetView, TouchableOpacity } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MaskedCardText from "../general/maskedCardText";
import { AntDesign } from '@expo/vector-icons';
import Colors from "@/constants/Colors";

interface Props {
    title?: string
    onChangeIndex: (index: number) => void
}
type Ref = BottomSheet;

const HistoryDetailsBottomSheet = forwardRef<Ref, Props>((props, ref) => {

    const snapPoints = useMemo(() => ['65%'], []);

    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior={'close'} {...props} />, []
    )

    return (
        <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: Colors.blackSecondary }}
            backgroundStyle={{ backgroundColor: Colors.backgroundGreen }}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={styles.contentContainer}>
                <View style={[defaultStyles.flexRow]}>
                    <Text style={styles.headingText}>Review Summary</Text>
                </View>
                <View style={{ gap: 10, flex: 1 }}>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Parking Area</Text>
                        <Text style={styles.headerText}>Zona C, Poligoni 02</Text>
                    </View>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Address</Text>
                        <Text style={styles.headerText}>Rruga “Asim Zeneli”</Text>
                    </View>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Vehicle</Text>
                        <Text style={styles.headerText}>Mercedes Benz (AA123AA)</Text>
                    </View>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Date</Text>
                        <Text style={styles.headerText}>March 29, 2024</Text>
                    </View>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Duration</Text>
                        <Text style={styles.headerText}>2 hour</Text>
                    </View>
                    <View style={[defaultStyles.flexRow, styles.dataRow]}>
                        <Text style={styles.titleText}>Hours</Text>
                        <Text style={styles.headerText}>16:00 PM - 18:00 PM</Text>
                    </View>
                    <View style={defaultStyles.separator} />
                    <View style={[defaultStyles.flexRow, styles.dataRow, { marginTop: 10 }]}>
                        <Text style={styles.titleText}>Total</Text>
                        <Text style={styles.headerText}>2.90 $</Text>
                    </View>
                    <View style={defaultStyles.separator} />
                    <View style={{ marginTop: 'auto', marginBottom: 10 }}>
                        <TouchableOpacity style={styles.button} disabled={true}>
                            <Text style={styles.buttonText}>Paguar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheet>
    )
})

export default HistoryDetailsBottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        gap: 25
    },
    topContainer: {
        gap: 20,
        // backgroundColor: 'red',
        flex: 1
    },
    textContainer: {
    },
    headerText: {
        fontFamily: 'OpenSansBold',
        color: Colors.blackSecondary,
        fontSize: 16
    },
    subHeaderText: {
        fontFamily: 'OpenSans',
        color: Colors.blackSecondary,
        fontSize: 16
    },
    carInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.blackSecondary
    },
    carImage: {
        height: 48,
        width: 48,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        opacity: 0.5
    },
    buttonText: {
        fontFamily: 'OpenSansBold',
        fontSize: 16,
        color: Colors.blackSecondary,
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        paddingVertical: 13,
        paddingHorizontal: 10
    },
    headingText: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: Colors.blackSecondary
    },
    dataRow: {
        justifyContent: 'space-between',
    },
    titleText: {
        fontFamily: 'OpenSans',
        fontSize: 13,
        color: Colors.blackSecondary
    }
})