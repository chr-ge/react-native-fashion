import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text, Theme } from './Theme';

interface RoundIconProps {
    name: string;
    size: number;
    color: keyof Theme['colors'];
    backgroundColor: keyof Theme['colors'];
}

const RoundIcon = ({ name, size, color, backgroundColor }: RoundIconProps) => {
    const iconSize = size * 0.7;
    
    return (
        <Box 
            height={size} 
            width={size} 
            justifyContent="center"
            alignItems="center"
            style={{ borderRadius: size / 2 }}
            { ...{ backgroundColor }}
        >
            <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
                <Icon color="color" size={iconSize} style={{ textAlign: "center" }} {...{ name }}/>
            </Text>
        </Box>
    )
}

export default RoundIcon;