import React from 'react'
import RoundIcon, { RoundIconProps } from './RoundIcon'
import { BorderlessButton } from 'react-native-gesture-handler';

interface RoundIconButtonProps extends RoundIconProps {
  onPress: () => void;
}

const RoundIconButton = ({ onPress, ...props}: RoundIconButtonProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundIcon {...props} />  
    </BorderlessButton>
  )
}

RoundIconButton.defaultProps = { ...RoundIcon.defaultProps };

export default RoundIconButton
