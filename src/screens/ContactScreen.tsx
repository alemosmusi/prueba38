import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const ContactScreen = () => {



  const {signIn, authState} = useContext(AuthContext)


  const {isLoggedIn} = authState



  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen</Text>

        {
          isLoggedIn?
          <Text>esta logueado</Text>
          :
          <Button 
            title='SignIn'
            onPress={signIn}
          />
        }
    </View>
  )
}

export default ContactScreen