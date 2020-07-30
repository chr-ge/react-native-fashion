import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet, StatusBar } from "react-native";
import theme, { Theme, Text, Box } from './Theme';

export const assets = [require("./assets/1.png")]
const { width } = Dimensions.get('window');
const aspectRatio = 1536 / 2048;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    return (
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}> 
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
            <Box height={200} backgroundColor="secondary">
                {footer}
            </Box>
        </Box>
    );
};

Container.defaultProps = { variant: "default" };

export default Container;