/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable,Text,View,Image,useWindowDimensions } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { Feather } from '@expo/vector-icons';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() { 
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name = "HomeScreen" 
        component ={HomeScreen} 
        options={{headerTitle: HomeHeader, headerTitleAlign : 'center' }}
      />
      <Stack.Screen name="ChatRoom" 
      component={ChatRoomScreen} 
      options = {{headerTitle : ChartRoomHeader, headerTitleAlign : 'center', headerBackTitleVisible : false}}
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader  = (props) =>{
  const {width} = useWindowDimensions()
  return (
    <View style = {{
      flexDirection : 'row',
      flex : 1,
      justifyContent : 'space-between',
      padding : 10,
      alignItems : 'center',
      width : width,
      position : 'absolute',
      }}>
      <Image 
      source = {{uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} 
      style = {{width : 30, height : 30, borderRadius : 30}} />
      <Text style = {{textAlign : 'center',flex : 1,fontWeight : 'bold',fontSize : 18, color : 'darkblue'}}>Signal</Text>
    <Feather name="camera" size={24} color="black" style = {{marginHorizontal : 5}}/>
    <Feather name="edit-2" size={24} color="black" style = {{paddingRight : 10, marginHorizontal : 5}}/>
    </View>);
}

const ChartRoomHeader  = (props) =>{
  const {width} = useWindowDimensions()
  return (
    <View style = {{
      flexDirection : 'row',
      flex : 1,
      justifyContent : 'space-between',
      padding : 10,
      width : width - 60,
      marginLeft : 60,
      alignItems : 'center',
      position : 'absolute'
      }}>
      <Image 
      source = {{uri : 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} 
      style = {{width : 30, height : 30, borderRadius : 30}} />
      <Text style = {{flex : 1,marginLeft : 10, fontWeight : 'bold',fontSize : 18, color : 'darkblue'}}>{props.children}</Text>
    <Feather name="camera" size={24} color="black" style = {{marginHorizontal : 5}} />
    <Feather name="edit-2" size={24} color="black" style = {{paddingRight : 10, marginHorizontal : 5}}/>
    </View>);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
