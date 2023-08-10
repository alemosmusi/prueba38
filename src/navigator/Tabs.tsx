import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = ()=>{
  return Platform.OS === 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}




const BottomTabAdnroid = createMaterialBottomTabNavigator();

const TabsAndroid = ()=> {
  return (
    <BottomTabAdnroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}

      screenOptions={({route}) => ({
        tabBarIcon: ({color,focused})=>{
          let iconName: string= '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName= 'T1'
              break
            case 'Tab2Screen':
              iconName= 'T2'
              break
            case 'StackNavigator':
              iconName= 'St'
              break
            
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
        
        
      })}

    >
      <BottomTabAdnroid.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAdnroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAdnroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAdnroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      
      screenOptions={({route}) => ({
        tabBarIcon: ({color,focused,size})=>{
          let iconName: string= '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName= 'T1'
              break
            case 'Tab2Screen':
              iconName= 'T2'
              break
            case 'StackNavigator':
              iconName= 'St'
              break
            
          }
          return <Text style={{ color }}>{iconName}</Text>
        },
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
          
        },
        tabBarLabelStyle:{
          fontSize:15
        }
        
        
      })}
      

      
      
      >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon:(props)=> <Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
