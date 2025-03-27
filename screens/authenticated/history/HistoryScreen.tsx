import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { HistoryData } from '@/assets/data/HistoryData'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import HeaderComponent from '@/components/general/headerComponent'
import { defaultStyles } from '@/constants/Styles'
import HistoryCard from '@/components/history/historyCard'
import HistoryDetailsBottomSheet from '@/components/BottomSheets/HistoryDetailsBottomSheet'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';


const HistoryScreen = ({ navigation }: { navigation: any }) => {

  const history = HistoryData

  const bottomSheetRef = useRef<BottomSheet>(null);
  const onChangeIndex = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index)
  }
  const handleClose = () => {
    bottomSheetRef.current?.snapToIndex(-1)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blackBackground }} edges={['top']}>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomColor: 'white', borderBottomWidth: 1, padding: 5 }}>
          <Text style={[defaultStyles.textBold16, { color: 'white' }]}>History</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={history}
            renderItem={({ item }: any) => <HistoryCard item={item} onSeeInvoice={() => onChangeIndex(0)} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>
        <HistoryDetailsBottomSheet ref={bottomSheetRef} onChangeIndex={(index) => onChangeIndex(index)} />
      </View>
    </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingBottom: 15,
    gap: 20
  },
})