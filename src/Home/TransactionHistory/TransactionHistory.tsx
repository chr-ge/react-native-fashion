import React from 'react';

import { Box, Header, Text } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';

const TransactionHistory = ({ navigation }: HomeNavigationProps<'TransactionHistory'>) => {
    
    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Transaction History" 
                left={{ icon: 'arrow-left', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'share', onPress: () => true }} 
            />
            <Box padding="m">
                <Box flexDirection="row" justifyContent="space-between"alignItems="flex-end">
                    <Box>
                        <Text>TOTAL SPENT</Text>
                        <Text>$619.19</Text>
                    </Box>
                    <Box backgroundColor="primaryLight" borderRadius="l" padding="s">
                        <Text color="primary">All Time</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TransactionHistory;