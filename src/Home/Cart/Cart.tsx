import React from "react";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  return (
    <Box backgroundColor="background">
      <Header
        title="Cart"
        left={{
          icon: "arrow-left",
          onPress: () => navigation.openDrawer(),
        }}
        right={{ icon: "share", onPress: () => true }}
      />
    </Box>
  );
};

export default Cart;
