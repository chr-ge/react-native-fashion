import React from 'react';
import { ScrollView } from 'react-native';
import { Box, Header, Text } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import Graph, { DataPoint } from './Graph';
import Transaction from './Transaction';

const startDate = new Date('09/01/2019').getTime();
const numberOfMonths = 6;

const graphData: DataPoint[] = [
    { id: 245674, date: new Date('10/01/2019').getTime(), value: 139.42, color: 'primary' },
    { id: 245675, date: new Date('12/01/2019').getTime(), value: 281.23, color: 'orange' },
    { id: 245677, date: new Date('02/01/2020').getTime(), value: 198.54, color: 'yellow' },
];

const TransactionHistory = ({ navigation }: HomeNavigationProps<'TransactionHistory'>) => {
    
    return (
        <Box flex={1} backgroundColor="white">
            <Header 
                title="Transaction History" 
                left={{ icon: 'arrow-left', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'share', onPress: () => true }} 
            />
            <Box flex={1} padding="m">
                <Box flexDirection="row" justifyContent="space-between"alignItems="flex-end">
                    <Box>
                        <Text variant="header" color="secondary" opacity={0.3}>TOTAL SPENT</Text>
                        <Text variant="title1">$619.19</Text>
                    </Box>
                    <Box backgroundColor="primaryLight" borderRadius="l" padding="s">
                        <Text color="primary">All Time</Text>
                    </Box>
                </Box>
                <Graph data={graphData} startDate={startDate} numberOfMonths={numberOfMonths}/>
                <ScrollView>
                    {
                        graphData.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
                    }
                </ScrollView>
            </Box>
        </Box>
    )
}

export default TransactionHistory;