import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../components';
import { StackNavigationProps, Routes } from '../components/Navigation';
import TextInput  from '../components/Form/TextInput';
import Checkbox  from '../components/Form/Checkbox';
import Footer from './components/Footer';
import { BorderlessButton } from 'react-native-gesture-handler';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
    const { 
        handleChange, handleBlur, handleSubmit,
        values, errors, touched, setFieldValue 
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', remember: false },
        onSubmit: (initialValues) => console.log(initialValues) 
    });
    const password = useRef<RNTextInput>(null);
    const footer = <Footer title="Don't have an account?" action="Sign Up here" onPress={() => navigation.navigate('SignUp')} />

    return (
        <Container pattern={0} {...{footer}}>
            <Box padding="xl">
                <Text variant="title1" textAlign="center" marginBottom="l">Welcome Back</Text>
                <Text variant="body" textAlign="center" marginBottom="l">
                    Use your credentials below and login to your account.
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
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box flexDirection="row" justifyContent="space-between" marginVertical="s" alignItems="center">
                        <Checkbox 
                            label="Remember me" 
                            checked={values.remember} 
                            onChange={() => setFieldValue("remember", !values.remember)}
                        />
                        <BorderlessButton  
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            <Text variant="button" color="primary">Forgot Password</Text>
                        </BorderlessButton>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button variant="primary" label="Log into your account" onPress={handleSubmit} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Login;