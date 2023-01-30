import { StyleSheet } from 'react-native'
import React from 'react'
import { SocialLogin } from './SocialLogin';
import { Box, Text } from '../../../components/Theme';
import { BorderlessButton } from 'react-native-gesture-handler';

interface FooterProps {
  title: string;
  action: string;
  onPress: () => void
}

const Footer = ({ title, action, onPress}: FooterProps) => {
  return (
    <>
      <Box alignItems="center" marginTop="xxl">
        <BorderlessButton {...{ onPress}}>
          <Text variant="button" color="background">
            <Text>{`${title}`}</Text>
            <Text color="primary">{'  ' }{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
}

export { Footer }

const styles = StyleSheet.create({})