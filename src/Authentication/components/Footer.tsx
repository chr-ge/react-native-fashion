import React from 'react';
import { Box, Text } from '../../components';
import SocialLogin from './SocialLogin';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface FooterProps {
    title: string;
    action: string;
    onPress: () => void;
}

const Footer = ({ title, action, onPress }: FooterProps) => {
    return (
        <>
            <SocialLogin />
            <Box alignItems="center" marginTop="m">
                <TouchableWithoutFeedback {...{ onPress }}>
                    <Text variant="button" color="white">
                        <Text>{`${title} `}</Text>
                        <Text color="primary">{action}</Text>
                    </Text>
                </TouchableWithoutFeedback>
            </Box>
        </>
    )
}

export default Footer;