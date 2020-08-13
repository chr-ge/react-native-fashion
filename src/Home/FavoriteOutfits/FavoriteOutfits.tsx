import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Box, Header, useTheme } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';

import Outfit from './Outfit';
import Footer from './Footer';

const { width: wWidth } = Dimensions.get('window');

const outfits = [
    { id: 0, color: "#BFEAF5", aspectRatio: 1 },
    { id: 1, color: "#BEECC4", aspectRatio: 200 / 145 },
    { id: 2, color: "#FFE4D9", aspectRatio: 180 / 145 },
    { id: 3, color: "#FFDDDD", aspectRatio: 180 / 145 },
    { id: 4, color: "#BFEAF5", aspectRatio: 1 },
    { id: 5, color: "#F3F0EF", aspectRatio: 120 / 145 },
    { id: 6, color: "#D5C3BB", aspectRatio: 210 / 145 },
    { id: 7, color: "#DEEFC4", aspectRatio: 160 / 145 },
]

const FavoriteOutfits = ({ navigation }: HomeNavigationProps<'FavoriteOutfits'>) => {
    const theme = useTheme();
    const width = (wWidth - theme.spacing.m * 3) / 2;

    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Favorite Outfits"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <ScrollView contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}>
                <Box flexDirection="row">
                    <Box marginRight="m">
                        {outfits.filter((_, i) => i % 2 !== 0).map((outfit) => 
                            <Outfit key={outfit.id} outfit={outfit} width={width} />
                        )}
                    </Box>
                    <Box>
                        {outfits.filter((_, i) => i % 2 === 0).map((outfit) => 
                            <Outfit key={outfit.id} outfit={outfit} width={width} />
                        )}
                    </Box>
                </Box>
            </ScrollView>
            <Footer label="Add more to favorites" onPress={() => null} />
        </Box>
    )
}

export default FavoriteOutfits;