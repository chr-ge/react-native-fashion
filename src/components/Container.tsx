import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from "expo-constants";

import { Box, useTheme } from './Theme';
export const assets = [
    require("./assets/1.png"),
    require("./assets/2.png"),
    require("./assets/3.png"),
] as const;
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 1023 / 1535;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const asset = assets[pattern];

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
                <Box backgroundColor="background">
                    <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61 }> 
                        <Image 
                            source={asset} 
                            style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }}
                        />
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">
                    <Image 
                        source={asset} 
                        style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }}
                    />
                    <Box 
                        flex={1} 
                        borderRadius="xl" 
                        backgroundColor="background" 
                        justifyContent="center"
                        padding="xl"
                    >
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="secondary" paddingTop="m">
                    {footer}    
                    <Box height={Math.max(insets.bottom, 16)} />
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;