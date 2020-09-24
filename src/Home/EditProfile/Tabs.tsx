import React, { useState, ReactNode, Children } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { multiply } from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash";
import { Box, Text, useTheme } from "../../components";

const { width } = Dimensions.get("window");

interface Tab {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const selectedTab = tabs[index];
  const transition = useTransition(index);
  const translateX = mix(transition, width * 0.25, width * 0.75);

  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton key={i} onPress={() => setIndex(i)} style={{ flex: 1 }}>
            <Box padding="m" style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant="title3" textAlign="center">
                {tab.title}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            left: -5,
            backgroundColor: theme.colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
            transform: [{ translateX }],
          }}
        />
      </Box>
      <Animated.View
        style={{
          width: width * tabs.length,
          flexDirection: "row",
          transform: [{ translateX: multiply(-width, transition) }],
        }}
      >
        {Children.map(children, (child, i) => (
          <Box key={i} flex={1} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
