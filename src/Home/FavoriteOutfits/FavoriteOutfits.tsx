import React from 'react';

import { Box, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';


const FavoriteOutfits = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Outfit Ideas"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            
        </Box>
    )
}

export default FavoriteOutfits;