import { Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Box, Text, useTheme } from '../../components/Theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OTPInput } from './components/OTPInput'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ButtonContainer, ButtonText } from './components/styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { OnBoardingStackList } from '../../../types'
import { RouteProp } from '@react-navigation/native'
import { onScreen } from '../../constants'
import Button from '../../components/Button'
import Screen from '../../components/Screen'
import { Space } from '../../components/Space'

interface Props {
  navigation: NativeStackNavigationProp<OnBoardingStackList, "ConfirmSignUp">;
  route: RouteProp<OnBoardingStackList, "ConfirmSignUp">;
}

const ConfirmSignUp = ({ navigation, route}: Props) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;

  // const _onPress = async () => {
  //   setLoading(true);
  //   setError("");
  //   const { email, password } = route?.params;
  //   try {
  //     await Auth.confirmSignUp(email, otpCode, { forceAliasCreation: true });
  //     const user = await Auth.signIn(email, password);
  //     user && onScreen("MAIN", navigation)();
  //     setLoading(false);
  //   } catch (err: any) {
  //     setLoading(false);
  //     setError(err.message);
  //     if (err.code === "UserNotConfirmedException") {
  //       setError("Account not verified yet");
  //     } else if (err.code === "PasswordResetRequiredException") {
  //       setError("Existing user found. Please reset your password");
  //     } else if (err.code === "NotAuthorizedException") {
  //       setError("Forgot Password?");
  //     } else if (err.code === "UserNotFoundException") {
  //       setError("User does not exist!");
  //     }
  //   }
  // };

  // const _onResend = async () => {
  //   const { email } = route?.params;
  //   try {
  //     await Auth.resendSignUp(email);
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };

  return (
    <Screen>
      <Space />
      <Text mt="xxxl" p="m" variant="medium">
        Enter Code
      </Text>
      <Box flexDirection="row" alignItems="center">
        <Text paddingLeft="m" variant="body">
          {"*"} We have sent the confirmation code to
          <Text variant="body"> your email address.</Text>
        </Text>
      </Box>
      <Space />
      <Pressable onPress={Keyboard.dismiss} style={{ marginTop: 20 }}>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
      </Pressable>
      <Space height={20} />
      <Box flexDirection="row" mt="m" marginHorizontal="m" alignItems="center">
        <Text
          textAlign="center"
          variant="body2"
        >{`Didn\'t recieve the OTP ? ${"    "}`}</Text>
        <BorderlessButton onPress={_onResend}>
          <Text fontSize={18} variant="button" color="danger">
            RESEND OTP
          </Text>
        </BorderlessButton>
      </Box>
      <Space />
      {/* <ButtonContainer
        disabled={!isPinReady}
        style={{
          backgroundColor: !isPinReady ? colors.info : colors.primary,
          alignSelf: "center",
        }}
        onPress={_onPress}
      >
        <ButtonText
          style={{
            color: !isPinReady ? colors.background2 : colors.background,
          }}
        >
          Proceed
        </ButtonText>
      </ButtonContainer> */}
      <Box alignItems="center" marginTop="m">
        <Button variant={ !isPinReady ? "default": "primary"} label="Proceed" onPress={_onPress} />
      </Box>
    </Screen>
  );
}

export { ConfirmSignUp };

