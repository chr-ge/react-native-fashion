import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../../components';
import TextInput  from '../components/Form/TextInput';
import Checkbox  from '../components/Form/Checkbox';
import Footer from '../components/Footer';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
});

const Login = () => {
    const { 
        handleChange, handleBlur, handleSubmit,
        values, errors, touched, setFieldValue 
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '', remember: false },
        onSubmit: (initialValues) => console.log(initialValues) 
    });
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
                        />
                    </Box>
                    <TextInput 
                        icon="lock" 
                        placeholder="Enter your password" 
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
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

export default Login;