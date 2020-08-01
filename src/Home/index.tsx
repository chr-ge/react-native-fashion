import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeas from './OutfitIdeas/OutfitIdeas';

const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
)