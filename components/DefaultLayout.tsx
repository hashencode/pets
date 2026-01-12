import { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView, SafeAreaViewProps, useSafeAreaInsets } from 'react-native-safe-area-context';

interface IDefaultLayoutProps extends PropsWithChildren {
    safeAreaViewConfig?: SafeAreaViewProps;
    scrollable?: boolean;
    styles?: {
        safeAreaView?: string;
        safeTop?: string;
        safeBottom?: string;
        mainContent?: string;
    };
}

export const DefaultLayout = (props: IDefaultLayoutProps) => {
    const { safeAreaViewConfig, scrollable = true, styles = {} } = props;
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView className={`bg-[#f7f7f7] ${styles.safeAreaView}`} {...safeAreaViewConfig}>
            {/*顶部安全区域*/}
            <View className={`absolute left-0 top-0 w-full ${styles.safeTop}`} style={{ height: insets.top }} />
            {/*主体内容*/}
            <View className={`h-full ${styles.mainContent}`}>
                {scrollable ? (
                    <ScrollView overScrollMode="never">{props.children}</ScrollView>
                ) : (
                    <View className="flex-1">{props.children}</View>
                )}
            </View>
            {/*底部安全区域*/}
            <View className={`absolute bottom-0 left-0 w-full ${styles.safeBottom}`} style={{ height: insets.bottom }} />
        </SafeAreaView>
    );
};
