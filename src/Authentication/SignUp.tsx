import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import TextInput  from '../components/Form/TextInput';
import Footer from './components/Footer';

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    confirmPassword: Yup.string().equals([Yup.ref('password')], "Passwords don't match").required('Required')
});

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
    const { 
        handleChange, handleBlur, handleSubmit,
        errors, touched 
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email: '', password: '', confirmPassword: '' },
        onSubmit: (initialValues) => console.log(initialValues) 
    });
    const password = useRef<RNTextInput>(null);
    const confirmPassword = useRef<RNTextInput>(null);
    const footer = <Footer title="Already have an account?" action="Login here" onPress={() => navigation.navigate('Login')} />

    return (
        <Container pattern={1} {...{footer}}>
            <Text variant="title1" textAlign="center" marginBottom="l">Create account</Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Let us know your email and password.
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
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <Box marginBottom="m">
                    <TextInput 
                        ref={password}
                        icon="lock" 
                        placeholder="Enter your password" 
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => confirmPassword.current?.focus()}
                        secureTextEntry
                    />
                </Box>
                <TextInput 
                    ref={confirmPassword}
                    icon="lock" 
                    placeholder="Confirm your password" 
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                />
                <Box alignItems="center" marginTop="m">
                    <Button variant="primary" label="Create your account" onPress={handleSubmit} />
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp;