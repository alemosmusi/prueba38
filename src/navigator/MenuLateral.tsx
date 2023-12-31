import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
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
      <Drawer.Screen name="Tabs" component={ Tabs} />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen} />
    </Drawer.Navigator>
  );
}



const MenuInterno = ({navigation} : DrawerContentComponentProps)=>{


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


      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection:'row'
          }}
          onPress={()=> navigation.navigate('Tabs')}
          >
          <Icon name='compass-outline' size={25} color='blue'></Icon>
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection:'row'
          }}
          onPress={()=> navigation.navigate('SettingsScreen')}
          >
            <Icon name='cog-outline' size={25} color='blue'></Icon>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>



    </DrawerContentScrollView>
  
  
  
    )
}