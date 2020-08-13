import React from 'react';
import { Box } from '../../components';

interface OutfitProps {
    outfit: { id: number; color: string; aspectRatio: number };
    width: number;
}

const Outfit = ({ outfit:{ color: backgroundColor, aspectRatio }, width }: OutfitProps) => {
    return (
        <Box 
            borderRadius="s"
            marginBottom="m"
            style={{ backgroundColor, width, height: width * aspectRatio }}>
            
        </Box>
    )
}

export default Outfit;