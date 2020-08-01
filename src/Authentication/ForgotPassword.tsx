import React from 'react';
import { Linking } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthNavigationProps } from '../components/Navigation';
import TextInput from '../components/Form/TextInput';
import { Container, Box, Text, Button } from '../components';
import Footer from './components/Footer';

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
});

const ForgotPassword = ({ navigation }: AuthNavigationProps<"ForgotPassword">) => {
    const { 
        handleChange, handleBlur, handleSubmit,
        errors, touched 
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: '' },
        onSubmit: () => navigation.navigate("PasswordChanged") 
    });
    
    const footer = 
        <Footer 
            title="Not working?" 
            action="Try another way" 
            onPress={() => Linking.openURL("mailto:help@support.com")} 
        />

    return(
        <Container pattern={2} {...{ footer }}>
            <Text variant="title1" textAlign="center" marginBottom="l">Forgot Password?</Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Enter the email address associated with your account.
            </Text>
            <Box>
                <Box marginBottom="m">
                    <TextInput 
                        icon="mail" 
                        placeholder="Enter your email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')} 
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                    />
                </Box>
                <Box alignItems="center" marginTop="m">
                    <Button variant="primary" label="Reset Password" onPress={handleSubmit} />
                </Box>
            </Box>
        </Container>
    )
}

export default ForgotPassword;