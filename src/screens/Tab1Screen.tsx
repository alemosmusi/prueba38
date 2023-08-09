import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Tab1Screen = () => {

  useEffect(() => {
    console.log("tab1")
  }, [])
  




  return (
    <View>
        <Text>Tab1Screen</Text>
    </View>
  )
}

export default Tab1Screen
