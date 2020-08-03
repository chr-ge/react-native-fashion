import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Box, useTheme } from '../../components';

const Background = () => {
  const theme = useTheme();

  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1/3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1/3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image 
          source={require("./assets/background.png")} 
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl
          }} 
        />
      </Box>
      <Box flex={1/3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </View>
  )
}

export default Background;