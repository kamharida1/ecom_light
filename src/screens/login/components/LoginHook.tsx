import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {AntDesign, Ionicons} from '@expo/vector-icons'
import Screen from '../../../components/Screen';
import { Box, Text, useTheme } from '../../../components/Theme';
import { Controller, useForm } from 'react-hook-form';
import { ErrorText } from '../../../components/ErrorText';
import CustomButton from '../../../components/customButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { OnBoardingStackList } from '../../../../types';


const LoginHook = ({ navigation }) => {
  const { colors } = useTheme();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      identifier: '',
      password: ''
    }
  });

  const onSubmit = async (data: any) => {
    (navigation as any).navigate('Main', { screen: 'Home'})
  }
  const navigateToRegister = () => {
    navigation.navigate('Register')
  }
  return (
    <Screen style={styles.screen}>
      <Text
        style={styles.loginText}
      >
        Log in
      </Text>
      <Box
        flex={1}
        justifyContent="center"
      >
        <Box
          flexDirection="row"
          alignItems="center"
          pt="m"
          pb="m"
          px="l"
          bg="background"
          borderRadius="m"
          shadowColor="background2"
        >
          <AntDesign name="mail" size={20} color="black" />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Email"
                value={value}
                keyboardType="email-address"
              />
            )}
            name="identifier"
          />
        </Box>
        {errors.identifier && <ErrorText>Email is required</ErrorText>}
        <Box
          flexDirection="row"
          alignItems="center"
          pt="m"
          pb="m"
          px="l"
          bg="background"
          borderRadius="m"
          shadowColor="background2"
          mt="m"
          mb="l"
        >
          <Ionicons name="key-outline" size={20} color="black" />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                value={value}
              />
            )}
            name="password"
          />
        </Box>
        {errors.identifier && <ErrorText>Password is required</ErrorText>}
        <CustomButton text="Login" onPress={handleSubmit(onSubmit)} />
        <Box
          mt="xxl"
          alignItems='center'
        >
          <Text mb="xl" variant="body">Don't have an account?</Text> 
          <CustomButton
            text="Register Now"
            type="TERTIARY"
            bgColor={colors.primary}
            onPress={()=>{}}
          />
        </Box>
      </Box>
    </Screen>
  );
};

export { LoginHook };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
  input: {
    flex: 1,
    paddingStart: 16,
    fontFamily: "Airbnb-Medium",
    fontSize: 17,
  },
  loginText: {
    position: 'absolute',
    top: 100,
    left: 20,
    fontSize: 35
  },
});


export { LoginHook }
