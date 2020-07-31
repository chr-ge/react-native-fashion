import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { StackNavigationProps, Routes } from '../components/Navigation';
import { Container, CloseButton, Box, Text, Button } from '../components';

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) => {
    return(
        <Container footer={
            <Box flexDirection="row" justifyContent="center">
                <CloseButton  onPress={() => navigation.pop()} />
            </Box>
        }>
            <Box padding="xl" flex={1} justifyContent="center">
                <Box>
                    <Icon name="check"/>
                </Box>
                <Text variant="title1" textAlign="center" marginBottom="l">Your password was successfully changed</Text>
                <Text variant="body" textAlign="center" marginBottom="l">Close this window and login again.</Text>
                <Box alignItems="center" marginTop="m">
                    <Button variant="primary" label="Login again" onPress={() => navigation.navigate('Login')} />
                </Box>
            </Box>
        </Container>
    )
}

export default PasswordChanged;