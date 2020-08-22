import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useScrollHandler, interpolateColor } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";
import { AuthNavigationProps } from '../../components/Navigation';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import { Theme, makeStyles } from '../../components/Theme';

const {width} = Dimensions.get('window');
const useStyles = makeStyles((theme: Theme) => (({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomEndRadius: theme.borderRadii.xl,
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.borderRadii.xl
    },
    pagination: { 
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})))

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description: "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it First",
        description: "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color: "#BEECC4",
    },
    {
        title: "Excentric",
        subtitle: "Your Style, Your Way",
        description: "Create your individual & unique style and look amazing everyday",
        color: "#FFE4D9",
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description: "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD",
    },
];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const styles = useStyles();
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler , x} = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler }
                >
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title }}/>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View 
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} 
                />
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => 
                            <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />)
                        }
                    </View>
                    <Animated.View style={{ 
                        flex: 1, 
                        flexDirection: "row", 
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }] 
                    }}>
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            
                            return(
                                <SubSlide 
                                    key={index} 
                                    {...{ subtitle, description, last }}
                                    onPress={() => {
                                        if(last){
                                            navigation.navigate("Welcome");
                                        } else {
                                            scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width * (index + 1), animated: true });
                                        }
                                    }}
                                />
                            )
                        })}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}

export default Onboarding;