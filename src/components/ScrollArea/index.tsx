import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    children: ReactNode
    style?: ViewStyle
}

export default function ScrollArea({ children, style }: Props) {

    const insets = useSafeAreaInsets()

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >

                <ScrollView
                    contentContainerStyle={[{paddingHorizontal: 10, paddingTop: insets.top + 20, paddingBottom: insets.bottom + 10 }, style, { flex: 0, flexGrow: 1 }]}
                    showsVerticalScrollIndicator={false}
                >
                    {children}

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}