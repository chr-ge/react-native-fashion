import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Transition,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

import { Box, RoundIconButton, Text, useTheme } from "../../components";
import { aspectRatio } from "../../components/Theme";

interface SwipeableRowProps {
  children: ReactNode;
  onDelete: () => void;
}

const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;
const snapPoints = [-editWidth, 0, finalDestination];

const SwipeableRow = ({ children, onDelete }: SwipeableRowProps) => {
  const theme = useTheme();
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: true,
        },
        () => {
          if (dest === finalDestination) {
            onDelete();
          }
        }
      );
    },
  });
  const style = useAnimatedStyle(() => ({
    backgroundColor: theme.colors.background,
    transform: [{ translateX: translateX.value }],
  }));
  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));
  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          flex={1}
          justifyContent="space-evenly"
          width={editWidth}
          alignItems="center"
        >
          <Text color="background" variant="title3">
            Remove
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.edit, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.8, 0.5]}
        />
        <Box
          flex={1}
          justifyContent="space-evenly"
          width={editWidth}
          alignSelf="flex-end"
          alignItems="center"
        >
          <RoundIconButton
            onPress={() => alert("Plus")}
            name="plus"
            size={24}
            color="background"
            backgroundColor="primary"
          />
          <RoundIconButton
            onPress={() => alert("Minus")}
            name="minus"
            size={24}
            color="background"
            backgroundColor="danger"
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
