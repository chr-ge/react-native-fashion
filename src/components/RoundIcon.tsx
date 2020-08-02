import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text, Theme } from './Theme';

export interface RoundIconProps {
    name: string;
    size: number;
    color: keyof Theme['colors'];
    backgroundColor: keyof Theme['colors'];
    iconRatio: number;
}

const RoundIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundIconProps) => {
    const iconSize = size * iconRatio;
    
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
                <Icon size={iconSize} {...{ name }}/>
            </Text>
        </Box>
    )
}

RoundIcon.defaultProps = { iconRatio: 0.7 };

export default RoundIcon;