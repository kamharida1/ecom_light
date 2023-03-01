import { StyleSheet} from 'react-native'
import React, { useRef, useState } from 'react'
import * as Yup from 'yup'
import { TextInput as RNTextInput } from "react-native";
import * as SecureStore from 'expo-secure-store'


import { MainStackList, OnBoardingStackList } from '../../../types';
import { useFormik } from 'formik';
import { Footer } from '../login/components';
import Screen from '../../components/Screen';
import { Box, Text } from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { onScreen } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
});

interface Props {
  navigation: NativeStackNavigationProp<MainStackList & OnBoardingStackList, "Home">;
}

const Register = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const register = async (values: {email: string, password: string, confirmPassword: string}) => {
  //   const { email, password, confirmPassword } = values
  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match!')
  //   } else {
  //     setLoading(true);
  //     setError('');
  //     try { 
  //       const user = await Auth.signUp(
  //         {
  //           username: email,
  //           password,
  //         }
  //       );
  //       await SecureStore.setItemAsync('authKeyEmail', email)
  //       await SecureStore.setItemAsync('AuthKeyPassword', password)
  //       user && onScreen("ConfirmSignUp", navigation, { email, password })();
  //       setLoading(false);
  //     } catch (err: any) {
  //       setLoading(false);
  //       if (err.code === "UserNotConfirmedException") {
  //         setError("Account not verified yet");
  //       } else if (err.code === "PasswordResetRequiredException") {
  //         setError("Existing user found. Please reset your password");
  //       } else if (err.code === "NotAuthorizedException") {
  //         setError("Forgot Password?");
  //       } else if (err.code === "UserNotFoundException") {
  //         setError("User does not exist!");
  //       } else {
  //         setError(err.code);
  //       }
  //     }
  //   }
  // }

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", confirmPassword: "" },
      onSubmit: (values, actions) => undefined,
    }
  );
  
  const password = useRef<RNTextInput>(null);
  const confirmPassword = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );
  return (
    <Screen>
      <Text variant="title1" textAlign="center" mt="xxl" mb="xl">
        Create account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let us know your email and password.
      </Text>
      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
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
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
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
          onChangeText={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry
        />
        <Text style={{ alignSelf: 'center', marginVertical: 10, color: "red" }}>{error}</Text>
        <Box alignItems="center" marginTop="l">
          <Button
            variant="primary"
            label="Create your account"
            onPress={handleSubmit}
          />
        </Box>
        {footer}
      </Box>
    </Screen>
  );
}

export { Register }

const styles = StyleSheet.create({})