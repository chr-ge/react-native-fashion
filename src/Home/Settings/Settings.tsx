import React from "react";

import { Box, Header, Content } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";

const cards = [
  { index: 3, source: require("../../Authentication/assets/5.png") },
  { index: 2, source: require("../../Authentication/assets/5.png") },
  { index: 1, source: require("../../Authentication/assets/5.png") },
  { index: 0, source: require("../../Authentication/assets/5.png") },
];

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          title="Notifications"
          left={{
            icon: "arrow-left",
            onPress: () => navigation.openDrawer(),
          }}
          right={{ icon: "share", onPress: () => true }}
        />
        <Box padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notification"
            description="If the product you love comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;
