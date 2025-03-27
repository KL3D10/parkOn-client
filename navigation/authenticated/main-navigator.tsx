import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { isIOS } from '@/constants/Platform'
import { defaultStyles } from '@/constants/Styles'
import icons from '@/constants/Icons'
import HistoryStack from './history-stack'
import HomeStack from './home-stack'
import SettingsStack from './settings-stack'


const Tabs = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.blackSecondary,
                    height: isIOS ? 80 : 60,
                }
            }}>
            <Tabs.Screen
                name="HistoryStack"
                component={HistoryStack}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                gap: 2,
                                paddingTop: 5,
                                borderTopColor: focused ? Colors.primaryColor : Colors.blackSecondary,
                                borderTopWidth: 3,
                                height: '100%'
                            }}>
                                <Image source={focused ? icons.historyIconActive : icons.historyIconLight} resizeMode='contain' style={{ height: 26, width: 26, tintColor: focused ? Colors.primaryColor : 'white' }} />
                                <Text style={[defaultStyles.textRegular13, { color: focused ? Colors.primaryColor : 'white' }]}>History</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                gap: 2,
                                paddingTop: 5,
                                borderTopColor: focused ? Colors.primaryColor : Colors.blackSecondary,
                                borderTopWidth: 3,
                                height: '100%'
                            }}>
                                <Image source={focused ? icons.homeIconActive : icons.homeIconLight} resizeMode='contain' style={{ height: 28, width: 28 }} />
                                <Text style={[defaultStyles.textRegular13, { color: focused ? Colors.primaryColor : 'white' }]}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tabs.Screen
                name="SettingsStack"
                component={SettingsStack}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                gap: 2,
                                paddingTop: 5,
                                borderTopColor: focused ? Colors.primaryColor : Colors.blackSecondary,
                                borderTopWidth: 3,
                                height: '100%'
                            }}>
                                <Image source={focused ? icons.settingsIconActive : icons.settingsIconLight} resizeMode='contain' style={{ height: 28, width: 28 }} />
                                <Text style={[defaultStyles.textRegular13, { color: focused ? Colors.primaryColor : 'white' }]}>Settings</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tabs.Navigator>
    )
}

export default MainNavigator