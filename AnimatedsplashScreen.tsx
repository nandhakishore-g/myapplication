// components/AnimatedSplashScreen.js
import LottieView from 'lottie-react-native';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
    onAnimationFinish: () => void;
}

const AnimatedSplashScreen: FunctionComponent<Props> = ({ onAnimationFinish }) => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../myapplication/assets/lottiejson.json')} // Your Lottie JSON file path
                style={styles.animation}
                autoPlay
                loop={false} // Play the animation only once
                onAnimationFinish={onAnimationFinish} // Callback when the animation ends
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // Match this to app.json backgroundColor
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});

export default AnimatedSplashScreen;
