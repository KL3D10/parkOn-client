import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import { Octicons } from '@expo/vector-icons'
import { NotificationData } from '@/assets/data/NotificationData'
import HeaderComponent from '@/components/general/headerComponent'
import NotificationItem from '@/components/settings/notificationItem'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoginModalState, logout, selectToken } from '@/store/auth'

const SettingsScreen = ({ navigation }: { navigation: any }) => {

    const notifications = NotificationData
    const token = useSelector(selectToken)

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blackBackground }} edges={['top']}>
            <HeaderComponent />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomColor: 'white', borderBottomWidth: 1, padding: 5 }}>
                    <Text style={[defaultStyles.textBold16, { color: 'white' }]}>Settings</Text>
                </View>
                <View style={{ flex: 1, paddingTop: 10, gap: 20 }}>
                    <View style={[defaultStyles.flexRow, { justifyContent: 'space-between' }]}>
                        <Text style={[defaultStyles.textRegular16, { color: 'white' }]}>Profile</Text>
                        {token && <TouchableOpacity style={{ marginLeft: 'auto', padding: 5 }} onPress={() => navigation.navigate("ProfileScreen")}>
                            <Octicons name="pencil" size={20} color={Colors.primaryColor} />
                        </TouchableOpacity>}
                    </View>
                    {token ? (
                        <View style={styles.profileContainer}>
                            <View style={[defaultStyles.flexRow, { justifyContent: 'space-between' }]}>
                                <Text style={[defaultStyles.textRegular13, { color: 'white' }]}>Name</Text>
                                <Text style={[defaultStyles.textBold16, { color: 'white' }]}>Abby</Text>
                            </View>
                            <View style={[defaultStyles.flexRow, { justifyContent: 'space-between' }]}>
                                <Text style={[defaultStyles.textRegular13, { color: 'white' }]}>Surname</Text>
                                <Text style={[defaultStyles.textBold16, { color: 'white' }]}>Adams</Text>
                            </View>
                            <View style={[defaultStyles.flexRow, { justifyContent: 'space-between' }]}>
                                <Text style={[defaultStyles.textRegular13, { color: 'white' }]}>Phone Number</Text>
                                <Text style={[defaultStyles.textBold16, { color: 'white' }]}>+355 69 69 696</Text>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => dispatch(logout())}>
                                <Text style={styles.buttonText}>Dil</Text>
                            </TouchableOpacity>
                        </View>
                    )
                        :
                        (
                            <View>
                                <TouchableOpacity style={styles.button} onPress={() => dispatch(changeLoginModalState({ loginModalState: true }))}>
                                    <Text style={styles.buttonText}>Regjistro te dhenat</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    <Text style={[defaultStyles.textRegular16, { color: 'white' }]}>Notification</Text>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={notifications}
                            renderItem={({ item }: any) => <NotificationItem notification={item} />}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ gap: 10 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    profileContainer: {
        paddingTop: 22,
        paddingBottom: 10,
        paddingHorizontal: 20,
        // width: '100%'
        backgroundColor: Colors.blackSecondary,
        borderRadius: 4,
        gap: 5
    },
    button: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 4
    },
    buttonText: {
        fontFamily: 'OpenSansBold',
        fontSize: 16,
        color: Colors.blackSecondary,
    }
})