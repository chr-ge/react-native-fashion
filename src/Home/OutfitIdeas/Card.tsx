import React from "react";
import { Dimensions, StyleSheet, ImageRequireSource } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  Extrapolate,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { mix, mixColor, snapPoint } from "react-native-redash";

import { Box } from "../../components";

interface CardProps {
  index: number;
  animatedIndex: Animated.SharedValue<number>;
  step: number;
  onSwipe: () => void;
  source: ImageRequireSource;
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
const snapPoints = [-wWidth, 0, wWidth];

const Card = ({ index, animatedIndex, step, onSwipe, source }: CardProps) => {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const position = useDerivedValue(() => index * step - animatedIndex.value);
  const onGestureEvent = useAnimatedGestureHandler<{ x: number; y: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, {
        velocity: velocityY,
      });
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest === 0 ? false : true,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && onSwipe()
      );
    },
  });
  
  const cardStyle = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.9);
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
      backgroundColor: mixColor(position.value, "#C9E9E7", "#74BCB8"),
    };
  });
  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.1, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              width,
              height,
              borderRadius,
              overflow: "hidden",
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            {...{ source }}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
