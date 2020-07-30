import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components';

import { Button } from '../../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 12
    },
    description: {
        textAlign: "center",
        marginBottom: 40,
    }
})

interface SubSlideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <Button 
                label={last ? "Let's get started" : "Next"} 
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    );
}

export default SubSlide;