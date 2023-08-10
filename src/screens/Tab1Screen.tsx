import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab1Screen = () => {


  const {top}= useSafeAreaInsets()



  return (
    <View style={{
       ...styles.globalMargin,
       marginTop: top +20
       }
       }>
        <Text style={styles.title}>Tab1Screen</Text>
        <Icon name="airplane-outline" size={50} color={colores.primary}/>
    </View>
  )
}

export default Tab1Screen
