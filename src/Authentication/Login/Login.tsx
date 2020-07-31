import React from 'react';
import { View } from 'react-native';

import { Container, Button, Text, Box } from '../../components';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems="center">
                <Button variant="transparent" onPress={() => true}>
                    <Box flexDirection="row" justifyContent="center">
                        <Text variant="button" color="white">Don't have an account?</Text>
                        <Text variant="button" color="primary" marginLeft="s">Sign Up here</Text>
                    </Box>
                </Button>
            </Box>
        </>
    ) 

    return (
        <Container {...{footer}}>
            <View />
        </Container>
    )
}

export default Login;