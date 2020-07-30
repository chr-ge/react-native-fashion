import React from 'react';
import { Box, Text, Button } from '../../components';
import { StackNavigationProps, Routes } from '../../components/Navigation';

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor="lightGrey">

            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box 
                    backgroundColor="grey" 
                    position="absolute" 
                    top={0} 
                    left={0} 
                    right={0} 
                    bottom={0}
                />
                <Box 
                    flex={1} 
                    backgroundColor="white" 
                    borderTopLeftRadius="xl" 
                    justifyContent="space-evenly" 
                    alignItems="center"
                    padding="xl"
                >
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup for an amazing experience
                    </Text>
                    <Button 
                        variant="primary" 
                        label="Have an account? Login" 
                        onPress={() => navigation.navigate("Login")}
                    />
                    <Button 
                        label="Join us, it's Free" 
                        onPress={() => true}
                    />
                    <Button 
                        variant="transparent" 
                        label="Forgot password?"
                        onPress={() => true}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Welcome;