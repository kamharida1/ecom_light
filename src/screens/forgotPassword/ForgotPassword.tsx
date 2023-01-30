import { Linking, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import { Box, Text } from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import { Footer } from '../login/components';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { StackNavigationProp } from '@react-navigation/stack';
import { OnBoardingStackList } from '../../../types';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
interface Props {
  navigation: StackNavigationProp<OnBoardingStackList, "PasswordChanged">;
}

const ForgotPassword = ({navigation}: Props) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

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
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account.
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset Password"
            onPress={handleSubmit}
          />
        </Box>
        {footer}
      </Box>
    </Screen>
  );
}

export { ForgotPassword }

const styles = StyleSheet.create({})