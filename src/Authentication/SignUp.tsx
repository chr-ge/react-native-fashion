import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../components';
import TextInput  from './components/Form/TextInput';
import Checkbox  from './components/Form/Checkbox';
import Footer from './components/Footer';

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
});

const SignUp = () => {
    const { 
        handleChange, handleBlur, handleSubmit,
        values, errors, touched, setFieldValue 
    } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { email: '', password: '', remember: false },
        onSubmit: (initialValues) => console.log(initialValues) 
    });
    const password = useRef<typeof TextInput>(null);
    const footer = <Footer title="Don't have an account?" action="Sign Up here" onPress={() => true} />

    return (
        <Container {...{footer}}>
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
                    <Box flexDirection="row" justifyContent="space-between">
                        <Checkbox 
                            label="Remember me" 
                            checked={values.remember} 
                            onChange={() => setFieldValue("remember", !values.remember)}
                        />
                        <Button variant="transparent" onPress={() => true}>
                            <Text variant="" color="primary">Forgot Password</Text>
                        </Button>
                    </Box>
                    <Box alignItems="center" marginTop="m">
                        <Button variant="primary" label="Log into your account" onPress={handleSubmit} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp;