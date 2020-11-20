import React, { ReactNode } from "react";
import { BoxProps } from "@shopify/restyle";
import { BorderlessTap, Box } from "../../components";
import { Theme } from "../../components/Theme";

export const CARD_HEIGHT = 160;

interface CardLayoutProps {
  onPress: () => void;
  backgroundColor: BoxProps<Theme>["backgroundColor"];
  children: ReactNode;
}

const CardLayout = ({
  onPress,
  children,
  backgroundColor,
}: CardLayoutProps) => {
  return (
    <BorderlessTap onPress={onPress}>
      <Box
        padding="m"
        width={120}
        height={CARD_HEIGHT}
        marginLeft="m"
        borderRadius="m"
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </BorderlessTap>
  );
};

export default CardLayout;
