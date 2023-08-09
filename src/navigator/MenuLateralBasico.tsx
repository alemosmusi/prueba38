import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Text, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico=() =>{


  const {width} = useWindowDimensions()






  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front'
      })}
    
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={ StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}