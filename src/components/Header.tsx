import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Text } from './Theme';
import RoundIconButton from './RoundIconButton';

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    };
}

const Header = ({ left, title, right }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    
    return (
        <Box 
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal="m"
            style={{ marginTop: insets.top }}
        >
            <RoundIconButton 
                name={left.icon} 
                color="white" 
                backgroundColor="secondary"
                onPress={left.onPress}
                size={24}
            />
            <Text variant="header" color="white">{title.toUpperCase()}</Text>
            <RoundIconButton 
                name={right.icon}  
                color="white" 
                backgroundColor="secondary"
                onPress={right.onPress}
                size={24}
            />
        </Box>
    )
}

export default Header;