import { FlatList, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useRef, useState } from "react";
import * as SecureStore from "expo-secure-store";

import { TextInput as RNTextInput } from "react-native";
import { OnBoardingStackList } from "../../../types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CommonActions, RouteProp } from "@react-navigation/native";
import Screen from "../../components/Screen";
import { Box, Text } from "../../components/Theme";
import TextInput from "../../components/Form/TextInput";
import Checkbox from "../../components/Form/Checkbox";
import { BorderlessButton } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { Footer } from "./components";
import { AuthContext } from "../../contexts/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Props {
  navigation: NativeStackNavigationProp<OnBoardingStackList, "Login">;
  route: RouteProp<OnBoardingStackList, 'Login'>
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation, route }: Props) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // const login = async (values: { email: string, password: string }) => {
  //   setError('');
  //   try {
  //     const { email, password } = values;
  //     const user = await Auth.signIn(email, password);
  //     console.log(JSON.stringify(user))
  //     await SecureStore.setItemAsync('authKeyEmail', email);
  //     await SecureStore.setItemAsync('AuthKeyPassword', password);
  //     setIsLoggedIn(true);
  //     setLoading(false)
  //   } catch ({ code }) {
  //     setLoading(false)
  //     if (code === "UserNotConfirmedException") {
  //       setError("Account not verified yet");
  //     } else if (code === "PasswordResetRequiredException") {
  //       setError("Existing user found. Please reset your password");
  //     } else if (code === "NotAuthorizedException") {
  //       setUserInfo(values);
  //       setError("Forgot Password?");
  //     } else if (code === "UserNotFoundException") {
  //       setError("User does not exist!");
  //     } else {
  //       setError(code as string);
  //     }
  //   }
  // };

   const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => 
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      ),
  });
  const password = useRef<RNTextInput>(null);
  return (
    <Screen>
      <Text variant="title1" textAlign="center" mt="xxl" mb="xl">
        Welcome Back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account.
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
        <TextInput
          ref={password}
          icon="lock"
          placeholder="Enter your password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry
        />
        <Text style={{ alignSelf: "center", marginVertical: 10, color: "red" }}>
          {error}
        </Text>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="m"
          alignItems="center"
        >
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot Password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={handleSubmit}
          />
        </Box>
        <Footer
          title="Don't have an account?"
          action="Sign Up here"
          onPress={() => navigation.navigate("Register")}
        />
      </Box>
    </Screen>
  );
};

export { Login };

const styles = StyleSheet.create({
});
