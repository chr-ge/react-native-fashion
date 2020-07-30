import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '../../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "SFProText-Semibold",
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 12
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "SFProText-Regular",
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    }
})

interface SubSlideProps {
    subtitle: string;
    description: string;
    last?: boolean;
}

const SubSlide = ({ subtitle, description, last }: SubSlideProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button 
                label={last ? "Let's get started" : "Next"} 
                variant={last ? "primary" : "default"}
            />
        </View>
    );
}

export default SubSlide;