import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colores, styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
import Icon  from 'react-native-vector-icons/Ionicons'

const SettingsScreen = () => {

  const instes = useSafeAreaInsets()

  const {authState} = useContext(AuthContext)


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: instes.top + 20
      }}>
        <Text style={styles.title}>Settings Screen</Text>
        <Text>{JSON.stringify(authState,null,4)}</Text>

        {
          authState.favoriteIcon && (
            <Icon name={authState.favoriteIcon} size={150} color={colores.primary}></Icon>

          )
        }

    </View>
  )
}

export default SettingsScreen
