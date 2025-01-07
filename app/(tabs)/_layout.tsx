import React from 'react';

import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { useThemeColor } from '@/components/Themed';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { ColorsEnum } from '@/enums/ColorsEnum';
import { ColorsName } from '@/enums/ColorsName';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: ColorsEnum;
}) => <Ionicons size={28} style={{ marginBottom: -3 }} name={props.name} color={props.color} />;

const TabLayout = () => {
  const tabBarActiveTintColor = useThemeColor({}, ColorsName.TINT);
  const tabBarInactiveTintColor = useThemeColor({}, ColorsName.INACTIVE_TINT);
  const backgroundColor = useThemeColor({}, ColorsName.BACKGROUND);
  const headerTextColor = useThemeColor({}, ColorsName.TEXT);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveTintColor,
        tabBarInactiveTintColor: tabBarInactiveTintColor,
        tabBarStyle: {
          ...(Platform.OS === 'android' ? { height: 60 } : {}),
          backgroundColor: backgroundColor,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: Platform.OS == 'ios' ? ColorsEnum.BLACK_OPACITY : undefined,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 1,
          shadowRadius: 5,
        },
        headerStyle: {
          backgroundColor: backgroundColor,
          borderBottomWidth: 0,
          elevation: 10,
          shadowColor: Platform.OS == 'ios' ? ColorsEnum.BLACK_OPACITY : undefined,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 5,
        },
        tabBarLabelStyle: {
          margin: 5,
        },
        headerTitleStyle: {
          color: headerTextColor,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Template',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color as ColorsEnum} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'By NZC',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color as ColorsEnum} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
