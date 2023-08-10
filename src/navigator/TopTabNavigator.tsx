import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {


  const { top: paddingTop } = useSafeAreaInsets()





  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarShowIcon:true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          
        },

        tabBarIcon: ({color,focused})=>{
          let iconName: string= '';
          switch (route.name) {
            case 'Chat':
              iconName= 'chatbox-ellipses-outline'
              break
            case 'Contact':
              iconName= 'mail-outline'
              break
            case 'Albums':
              iconName= 'albums-outline'
              break
            
          }
          return <Icon name={iconName} size={20} color={color}/>
        },
        
      })}
      
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}