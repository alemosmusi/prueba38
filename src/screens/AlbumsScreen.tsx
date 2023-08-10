import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const AlbumsScreen = () => {



  const {logout, authState} = useContext(AuthContext)


  const {isLoggedIn} = authState


  return (
    <View>
        <Text>AlbumsScreen</Text>
        {
          !isLoggedIn?
          <Text>esta logueado</Text>
          :
          <Button 
            title='LogOut'
            onPress={logout}
          />
        }
    </View>
  )
}

export default AlbumsScreen