import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { aspectRatio, useTheme } from "../../components/Theme";
import CartContainer from "./CartContainer";
import Item from "./Item";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 376 100 V 0 Z";

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const theme = useTheme();

  return (
    <CartContainer>
      <Box backgroundColor="primary">
        <Header
          dark
          title="Shopping Cart"
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
        />
      </Box>
      <Box width={width} height={height}>
        <Svg
          style={StyleSheet.absoluteFill}
          width={width}
          height={height}
          viewBox="0 0 375 100"
        >
          <Path d={d} fill={theme.colors.primary} />
        </Svg>
        <Text variant="title2" color="background" textAlign="center">
          3 Items Added
        </Text>
      </Box>
      <ScrollView
        style={{
          borderBottomLeftRadius: theme.borderRadii.xl,
          borderBottomRightRadius: theme.borderRadii.xl,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </CartContainer>
  );
};

export default Cart;
