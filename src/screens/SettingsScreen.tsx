import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

const SettingsScreen = () => {

  const instes = useSafeAreaInsets()


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: instes.top + 20
      }}>
        <Text style={styles.title}>Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen
