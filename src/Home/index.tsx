import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from '../components/Navigation';
import DrawerContent, { DRAWER_WIDTH } from './Drawer';
export { assets } from './Drawer';

import OutfitIdeas from './OutfitIdeas/OutfitIdeas';
import FavoriteOutfits from './FavoriteOutfits';
import TransactionHistory from './TransactionHistory';

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator 
    drawerContent={() => <DrawerContent />} 
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
  </Drawer.Navigator>
)