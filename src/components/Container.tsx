import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from "expo-constants";

import { Box, useTheme } from './Theme';
export const assets = [require("./assets/1.png")]
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 1023 / 1535;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
                <Box backgroundColor="white">
                    <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61 }> 
                        <Image 
                            source={assets[0]} 
                            style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }}
                        />
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">
                    <Image 
                        source={assets[0]} 
                        style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }}
                    />
                    <Box flex={1} borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white">
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