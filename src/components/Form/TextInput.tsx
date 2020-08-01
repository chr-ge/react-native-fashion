import React, { forwardRef } from "react";
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import { Box, useTheme } from '../Theme';
import RoundIcon from '../RoundIcon';

interface TextInputProps extends RNTextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const color = !touched ? "body" : error ? 'danger' : 'primary';
    const themeColor = theme.colors[color];

    return (
        <Box 
            flexDirection="row" 
            alignItems="center"
            height={48} 
            borderRadius="s" 
            borderColor={color} 
            borderWidth={StyleSheet.hairlineWidth}
            padding="s"
        >
            <Box padding="s">
                <Icon name={icon} size={16} color={themeColor} />
            </Box>
            <Box flex={1}>
                <RNTextInput 
                    underlineColorAndroid="transparent" 
                    placeholderTextColor={themeColor} 
                    {...{ ref }}
                    {...props}
                />
            </Box>
            {touched && (
                <RoundIcon 
                    name={!error ? "check" : "x"} 
                    size={SIZE}
                    backgroundColor={!error ? "primary" : 'danger'}
                    color="white"
                />
            )}
        </Box>
    );
});

export default TextInput;