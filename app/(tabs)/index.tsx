import { router, Stack } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { DefaultLayout } from '~/components/DefaultLayout';

export default function Home() {
    return (
        <DefaultLayout safeAreaViewConfig={{ edges: ['top', 'left', 'right'] }}>
            <Stack.Screen options={{ headerShown: false }} />
            {/*<View style={styles.container}>*/}
            {/*  <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />*/}
            {/*</View>*/}

            <View className="py-4 pl-3">
                <Text className="mb-3 text-2xl font-medium">My Pets</Text>
                <ScrollView horizontal className="flex">
                    {Array(10)
                        .fill('')
                        .map((_, index) => {
                            return (
                                <View className="mr-3 w-20" key={index}>
                                    <Image
                                        className="h-20 w-20 rounded-full"
                                        source={{
                                            uri: 'https://cdn.dribbble.com/userupload/45589292/file/f88b8bf99c1e6be04a61b6835adbca2a.png?resize=1504x1128&vertical=center',
                                        }}
                                    />
                                    <Text className="mt-1 line-clamp-1 text-center">Spaike</Text>
                                </View>
                            );
                        })}
                </ScrollView>
            </View>

            <View className="py-4 pl-3">
                <Text className="mb-3 text-2xl font-medium">Plans</Text>
                <ScrollView horizontal>
                    {[{ label: 'vomiting', icon: '', key: 'vomiting' }].map(({ label, icon, key }) => {
                        return <View className="mr-3 aspect-video w-56 overflow-hidden rounded-lg bg-primary" key={key} />;
                    })}
                </ScrollView>
            </View>

            <View className="px-3 py-4">
                <Text className="mb-3 text-2xl font-medium">Shortcuts</Text>
                <View className="flex flex-row flex-wrap justify-around gap-3">
                    {[
                        { label: 'vomit', icon: '', key: 'vomit', path: '/shortcuts/weight' }, // 呕吐
                        { label: 'weight', icon: '', key: 'weight', path: '/shortcuts/weight' }, // 称重
                        { label: 'appetite', icon: '', key: 'appetite', path: '/shortcuts/weight' }, // 食欲
                        { label: 'hospital', icon: '', key: 'hospital', path: '/shortcuts/weight' }, // 医院
                        { label: 'camera', icon: '', key: 'camera', path: '/shortcuts/weight' }, // 摄像头
                        { label: 'camera', icon: '', key: 'camera2', path: '/shortcuts/weight' }, // 摄像头
                        { label: 'camera', icon: '', key: 'camera3', path: '/shortcuts/weight' }, // 摄像头
                        { label: 'camera', icon: '', key: 'camera4', path: '/shortcuts/weight' }, // 摄像头
                    ].map(({ label, icon, key, path }) => {
                        return (
                            <Pressable
                                className="w-20"
                                key={key}
                                onPress={() => {
                                    router.push({ pathname: '/shortcuts/weight' });
                                }}>
                                <Image
                                    className="h-20 w-20 rounded-lg"
                                    source={{
                                        uri: 'https://cdn.dribbble.com/userupload/45589292/file/f88b8bf99c1e6be04a61b6835adbca2a.png?resize=1504x1128&vertical=center',
                                    }}
                                />
                                <Text className="mt-0.5 line-clamp-1 text-center text-secondary">{label}</Text>
                            </Pressable>
                        );
                    })}
                </View>
            </View>

            <View className="px-3 py-4">
                <Text className="mb-3 text-2xl font-medium">Nearby</Text>
                <View className="mr-3 aspect-video w-full overflow-hidden rounded-xl bg-white" />
            </View>
        </DefaultLayout>
    );
}
