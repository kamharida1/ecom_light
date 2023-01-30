import { FlatList, ScrollView, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput as RNTextInput } from "react-native";
import { OnBoardingStackList } from "../../../types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CommonActions } from "@react-navigation/native";
import Screen from "../../components/Screen";
import { Box, Text } from "../../components/Theme";
import TextInput from "../../components/Form/TextInput";
import Checkbox from "../../components/Form/Checkbox";
import { BorderlessButton } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { Footer } from "./components";

interface Props {
  navigation: StackNavigationProp<OnBoardingStackList, "Login">;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation }: Props) => {
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
    onSubmit: () =>
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
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="s"
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
