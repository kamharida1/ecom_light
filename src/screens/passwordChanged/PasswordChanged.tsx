import { StyleSheet } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackList, OnBoardingStackList } from '../../../types';
import Screen from '../../components/Screen';
import { Box, Text } from '../../components/Theme';
import RoundIconButton from '../../components/RoundIconButton';
import RoundIcon from '../../components/RoundIcon';
import Button from '../../components/Button';

interface Props {
  navigation: StackNavigationProp<OnBoardingStackList, "PasswordChanged">;
}

const PasswordChanged = ({ navigation }: Props) => {
  const SIZE = 80
  
  return (
    <Screen>
      <Box my="xxl">
        <Box flexDirection="row" justifyContent="center">
          <RoundIconButton
            name="x"
            size={60}
            backgroundColor="background"
            color="secondary"
            onPress={() => navigation.pop()}
          />
        </Box>
        <Box mt="l" alignSelf="center">
          <RoundIcon
            name="check"
            size={SIZE}
            color="primary"
            backgroundColor="primaryLight"
          />
        </Box>
        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again.
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Screen>
  );
}

export { PasswordChanged }

const styles = StyleSheet.create({})