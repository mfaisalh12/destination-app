import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import src page
import {Splash, Beranda, Destinasi, Informasi, Lainnya} from '../pages';

// import assets
import {
  BerandaIcon,
  DestinasiIcon,
  InformasiIcon,
  LainnyaIcon,
} from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: tabInfo => (
            <BerandaIcon
              primaryColor={tabInfo.focused ? '#6CB42D' : '#9096A0'}
              secondColor={tabInfo.focused ? '#0085CC' : '#9096A0'}
            />
          ),
          headerTitle: '',
        }}
      />
      <Tab.Screen
        name="Destinasi"
        component={Destinasi}
        options={{
          tabBarIcon: tabInfo => (
            <DestinasiIcon
              primaryColor={tabInfo.focused ? '#6CB42D' : '#9096A0'}
              secondColor={tabInfo.focused ? '#0085CC' : '#9096A0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Informasi"
        component={Informasi}
        options={{
          tabBarIcon: tabInfo => (
            <InformasiIcon
              primaryColor={tabInfo.focused ? '#6CB42D' : '#9096A0'}
              secondColor={tabInfo.focused ? '#0085CC' : '#9096A0'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarIcon: tabInfo => (
            <LainnyaIcon
              primaryColor={tabInfo.focused ? '#6CB42D' : '#9096A0'}
              secondColor={tabInfo.focused ? '#0085CC' : '#9096A0'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
