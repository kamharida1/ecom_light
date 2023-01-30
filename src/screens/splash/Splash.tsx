import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Image, StyleSheet } from 'react-native';
import { OnBoardingStackList } from '../../../types';
import Screen from '../../components/Screen'
import { Text, useTheme } from '../../components/Theme';


interface Props {
  navigation: StackNavigationProp<OnBoardingStackList, 'Splash'>
}

const Splash = ({ navigation }: Props) => {
  const { colors } = useTheme();
  useEffect(() => {
    const checkStorage = async () => {
      navigation.replace('Login')
    }
    checkStorage();
  }, [])
  return (
    <Screen style={styles.screen}>
      <Image
        style={styles.logo}
        source={require('../../../assets/icons/logo.png')}
      />
      <Text style={styles.appName}>
        AguBrothers
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  appName: {
    fontSize: 25,
    paddingTop: 24,
    paddingBottom: 24,
    color: '#000'
  }
})

export { Splash }
