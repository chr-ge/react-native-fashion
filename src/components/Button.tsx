import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Theme, Text } from './Theme';
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  }
});

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const { colors } = useTheme<Theme>();
  const backgroundColor = variant === "primary" 
    ? colors.primary
    : variant === "transparent" 
    ? "transparent"
    : colors.grey;
  const color = variant === "primary" ? colors.white : colors.secondary;
  
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? children : 
        <Text variant="button" style={{ color }}>{label}</Text>
      }
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;