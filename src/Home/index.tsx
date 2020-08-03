import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from '../components/Navigation';
import DrawerContent, { DRAWER_WIDTH } from './Drawer';
export { assets } from './Drawer';

import OutfitIdeas from './OutfitIdeas/OutfitIdeas';

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator 
    drawerContent={() => <DrawerContent />} 
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
)