import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, Text, RoundIconButton } from '../../components';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 1023 / 1535;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  { icon: "zap", label: "Outfit Ideas", screen: "OutfitIdeas", color: "primary" },
  { icon: "heart", label: "Favorite Outfits", screen: "FavoriteOutfits", color: "orange" },
  { icon: "user", label: "Edit Profile", screen: "EditProfile", color: "yellow" },
  { icon: "clock", label: "Transaction History", screen: "TransactionHistory", color: "pink" },
  { icon: "settings", label: "Notification Settings", screen: "NotificationSettings", color: "violet" },
  { icon: "log-out", label: "Logout", screen: "Logout", color: "secondary" },
]

const Drawer = () => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m"
          style={{ paddingTop: insets.top }}
        >
          <RoundIconButton 
            name="x" 
            color="white" 
            backgroundColor="secondary"
            onPress={() => true}
            size={24}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundIconButton 
            name="shopping-bag" 
            color="white" 
            backgroundColor="secondary"
            onPress={() => true}
            size={24}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary"/>
        <Box flex={1} backgroundColor="primaryLight"/>
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="white"
          justifyContent="center"
          padding="xl"
        >
          <Box 
            position="absolute" 
            left={DRAWER_WIDTH / 2 - 50} 
            top={-50} 
            backgroundColor="primary"
            style={{ borderRadius: 50 }}
            width={100}
            height={100}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">Mike Peter</Text>
            <Text variant="body" textAlign="center">mike@fashionvista.com</Text>
          </Box>
          {items.map(item => <DrawerItem key={item.screen} {...item} />)}
        </Box>
      </Box>
      <Box 
        backgroundColor="white" 
        width={DRAWER_WIDTH} 
        overflow="hidden"
        height={height * 0.61} 
      >
        <Image 
          source={require("../../components/assets/1.png")}
          style={{ ...StyleSheet.absoluteFillObject, width: undefined, height: undefined }}
        />
      </Box>
    </Box>
  )
}

export default Drawer;