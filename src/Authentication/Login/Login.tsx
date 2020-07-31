import React from 'react';

import { Container, Button, Text, Box } from '../../components';
import TextInput  from '../components/Form/TextInput';
import Checkbox  from '../components/Form/Checkbox';
import SocialLogin from '../components/SocialLogin';

const emailValidator = (email: string) => 
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email);

const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
    const footer = (
        <>
            <SocialLogin />
            <Box alignItems="center">
                <Button variant="transparent" onPress={() => alert("SignUp!")}>
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
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">Welcome Back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account.
                </Text>
                <Box marginBottom="m">
                    <TextInput icon="mail" placeholder="Enter your email" validator={emailValidator} />
                </Box>
                <TextInput icon="lock" placeholder="Enter your password" validator={passwordValidator} />
                <Box flexDirection="row" justifyContent="space-between">
                    <Checkbox label="Remember me"/>
                    <Button variant="transparent" onPress={() => true}>
                        <Text variant="" color="primary">Forgot Password</Text>
                    </Button>
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button variant="primary" label="Log into your account" onPress={() => true} />
                </Box>
            </Box>
        </Container>
    )
}

export default Login;