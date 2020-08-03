import React from 'react';
import { Box, Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Background from './Background';

const OutfitIdeas = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Outfit Ideas"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Box flex={1}>
                <Background />
            </Box>
        </Box>
    )
}

export default OutfitIdeas;