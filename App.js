import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import EndGameScreen from './screens/EndGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#049382', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground
        resizeMode="cover"
        source={require('./assets/images/background.png')}
        style={styles.imgBgContainer}
        imageStyle={styles.imgBg}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  imgBgContainer: {
    flex: 1
  },
  imgBg: {
    opacity: 0.3
  }
});
