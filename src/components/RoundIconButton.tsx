import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import RoundIcon, { RoundIconProps } from "./RoundIcon";

interface RoundIconButtonProps extends RoundIconProps {
  onPress: () => void;
}

const RoundIconButton = ({ onPress, ...props }: RoundIconButtonProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundIcon {...props} />
    </BorderlessButton>
  );
};

RoundIconButton.defaultProps = { ...RoundIcon.defaultProps };

export default RoundIconButton;