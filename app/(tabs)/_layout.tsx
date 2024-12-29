import React from 'react';

import { Platform, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { ColorsEnum } from '@/enums/ColorsEnum';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].inactiveTint,
        tabBarStyle: {
          ...(Platform.OS === 'android' ? { height: 60 } : {}),
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: Platform.OS == 'ios' ? ColorsEnum.BLACK_OPACITY : undefined,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 1,
          shadowRadius: 5,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
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
          color: Colors[colorScheme ?? 'light'].text,
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
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].iconHeader}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'By NZC',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}
