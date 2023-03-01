import { Linking, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Screen from '../../components/Screen'
import { Box, Text } from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import { Footer } from '../login/components';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { OnBoardingStackList } from '../../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { onScreen } from '../../constants';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Props {
  navigation: NativeStackNavigationProp<OnBoardingStackList, "ForgotPassword">;
  route: RouteProp<OnBoardingStackList, "ForgotPassword">;
}

const ForgotPassword = ({ navigation, route }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const _onPress = async (values: { email: string }): Promise<void> => {
  //   setLoading(true)
  //   try {
  //     const { email } = values
  //     const user = await Auth.forgotPassword(email);
  //     user && onScreen("ForgotPassSubmit", navigation, values)();
  //     setLoading(false);
  //   } catch (err) {
  //     setError(error)
  //   }
  // };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: (values) => undefined,
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