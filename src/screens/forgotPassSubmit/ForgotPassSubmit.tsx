import { Linking, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import Screen from "../../components/Screen";
import { Box, Text } from "../../components/Theme";
import TextInput from "../../components/Form/TextInput";
import Button from "../../components/Button";
import { TextInput as RNTextInput } from "react-native";
import * as SecureStore from "expo-secure-store";


import { Footer } from "../login/components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { OnBoardingStackList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { onScreen } from "../../constants";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  code: Yup.string().min(6).required(),
  password: Yup.string().min(6).required(),
  passwordConfirmation: Yup.string().min(6).required(),
});

interface Props {
  navigation: NativeStackNavigationProp<
    OnBoardingStackList,
    "ForgotPassSubmit"
  >;
  route: RouteProp<OnBoardingStackList, "ForgotPassSubmit">;
}

const ForgotPassSubmit = ({ navigation, route }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const _onPress = async (values: { email: string, code: string, password: string, passwordConfirmation: string }): Promise<void> => {
  //   setLoading(true);
  //   try {
  //     const { email, code, password } = values;
  //     await Auth.forgotPasswordSubmit(email, code, password)
  //     await SecureStore.setItemAsync("authKeyEmail", email);
  //     await SecureStore.setItemAsync("AuthKeyPassword", password);
  //     await Auth.signIn(email, password);
  //     onScreen('Home', navigation)()
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //     setError(error);
  //   }
  // };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: '', code: '', password: '', passwordConfirmation: '' },
      onSubmit: (values) => _onPress(values),
    }
  );
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  const code = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Not working?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );
  return (
    <Screen>
      <Text variant="title1" textAlign="center" mt="xxl" mb="xl">
        Forgot Password?
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
            onSubmitEditing={() => code.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="code"
            placeholder="Code"
            onChangeText={handleChange("code")}
            onBlur={handleBlur("code")}
            error={errors.code}
            touched={touched.code}
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            returnKeyType="next"
            secureTextEntry
            returnKeyLabel="next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="PasswordConfirm"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            returnKeyType="go"
            secureTextEntry
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" label="Confirm" onPress={handleSubmit} />
        </Box>
        {/* {footer} */}
      </Box>
    </Screen>
  );
};

export { ForgotPassSubmit };

const styles = StyleSheet.create({});
