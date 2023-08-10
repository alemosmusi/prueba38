import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {


  const {top}= useSafeAreaInsets()



  return (
    <View style={{
       ...styles.globalMargin,
       marginTop: top +20
       }
       }>
        <Text style={styles.title}>Tab1Screen</Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
    </View>
  )
}

export default Tab1Screen
