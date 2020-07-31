import React, { useState } from "react";
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';
import { Box, theme } from "../../../components";

interface TextInputProps extends RNTextInputProps {
    icon: string;
    validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
    const [state, setState] = useState<InputState>(Pristine);
    const [input, setInput] = useState("");
    const color: keyof typeof theme.colors = state === Pristine ? "body" : state === Valid ? "primary" : "danger";
    const themeColor = theme.colors[color];
    const onChangeText = (text: string) => {
        setInput(text);
        if(state === Pristine) validate();
    };
    const validate = () => setState(validator(input));

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
                    onBlur={validate}
                    {...{onChangeText}}
                    {...props}
                />
            </Box>
            {(state === Valid || state === Invalid) && (
                <Box 
                    height={SIZE} 
                    width={SIZE} 
                    borderRadius="m" 
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={state === Valid ? "primary" : "danger"}
                >
                    <Icon name={state === Valid ? "check" : "x"} color="white" size={16}/>
                </Box>
            )}
        </Box>
    );
};

export default TextInput;