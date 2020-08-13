import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';

import Footer from './Footer';

const FavoriteOutfits = ({ navigation }: HomeNavigationProps<'FavoriteOutfits'>) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Favorite Outfits"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <ScrollView />
            <Footer label="Add more to favorites" onPress={() => null} />
        </Box>
    )
}

export default FavoriteOutfits;