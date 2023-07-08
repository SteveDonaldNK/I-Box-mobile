import { Tabs } from "expo-router";
import { Text } from "react-native";
import { COLORS } from "../../constants";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
      }
    }}>
      <Tabs.Screen
        name="HomeTab"
        options={{
          headerShown: false,
          tabBarLabel: (() => null),
          tabBarIcon: ({ focused }) => <Entypo name="home" size={30} color={focused ? COLORS.primary : COLORS.grayColor} />,
        }}
      />
      <Tabs.Screen
        name="HistoryTab"
        options={{
          headerShown: false,
          tabBarLabel: (() => null),
          tabBarIcon: ({ focused }) => <MaterialIcons name="history" size={30} color={focused ? COLORS.primary : COLORS.grayColor} />,
        }}
      />
      <Tabs.Screen
        name="SubscriptionTab"
        options={{
          headerShown: false,
          tabBarLabel: (() => null),
          tabBarIcon: ({ focused }) => <FontAwesome5 name="ticket-alt" size={25} color={focused ? COLORS.primary : COLORS.grayColor} />,
        }}
      />
      <Tabs.Screen
        name="SettingsTab"
        options={{
          headerShown: false,
          tabBarLabel: (() => null),
          tabBarIcon: ({ focused }) => <Ionicons name="settings-sharp" size={30} color={focused ? COLORS.primary : COLORS.grayColor} />,
        }}
      />
    </Tabs>
  );
}