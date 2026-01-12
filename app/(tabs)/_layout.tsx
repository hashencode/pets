import { Tabs } from 'expo-router';

import { CalendarFold, PawPrint } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'black',
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <PawPrint color={color} />,
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => <CalendarFold color={color} />,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => <PawPrint color={color} />,
                }}
            />
        </Tabs>
    );
}
