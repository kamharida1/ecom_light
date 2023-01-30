import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './components/Button'
import RoundIcon from './components/RoundIcon'
import { Separator } from './components/Separator'
import { useTheme } from '@shopify/restyle'
import RoundIconButton from './components/RoundIconButton'
import TextInput from './components/Form/TextInput'
import Checkbox from './components/Form/Checkbox'


const Example = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Button label="Hello World" onPress={() => { }} />
      <Separator />
      <RoundIcon
        name="check"
        size={50}
        color="primary"
        backgroundColor="primaryLight"
      />
      <Separator />
      <RoundIconButton
        name="x"
        size={60}
        backgroundColor="background"
        color="secondary"
        onPress={() => console.warn("Clicked me !!!")}
      />
      <Separator />
      <TextInput isPassword />
      <Separator />
      <Checkbox label="Agree" />
      <Separator />
    </View>
  );
};


export default Example

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});