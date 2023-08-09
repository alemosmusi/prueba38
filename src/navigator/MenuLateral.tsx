import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral=() =>{


  const {width} = useWindowDimensions()






  return (
    <Drawer.Navigator
      drawerContent={(props)=> <MenuInterno {...props}/>}
      screenOptions={({ navigation }) => ({
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        
      })}
    
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}



const MenuInterno = (props : DrawerContentComponentProps)=>{


  return (

    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'

          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  
  
  
    )
}