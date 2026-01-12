import { Image, Text, View } from 'react-native';

import { DefaultLayout } from '~/components/DefaultLayout';

export default function Home() {
    return (
        <DefaultLayout safeAreaViewConfig={{ edges: ['top', 'left', 'right'] }}>
            {/*<Stack.Screen options={{ title: 'Tab One' }} />*/}
            {/*<View style={styles.container}>*/}
            {/*  <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />*/}
            {/*</View>*/}
            <View className="p-3">
                <View>
                    <Text className="text-2xl font-medium">My Pets</Text>
                </View>
                <View className="mt-3 flex gap-x-3">
                    <Image
                        className={'h-20 w-20 rounded-full'}
                        source={{
                            uri: 'https://cdn.dribbble.com/userupload/45589292/file/f88b8bf99c1e6be04a61b6835adbca2a.png?resize=1504x1128&vertical=center',
                        }}
                    />
                </View>
            </View>
        </DefaultLayout>
    );
}
