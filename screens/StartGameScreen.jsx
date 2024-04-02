import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGame = () => {
  return (
    <View style={styles.startGameContainer}>
      <View style={styles.Inner}>
        <TextInput style={styles.Input} keyboardType="number-pad" />
        <View style={styles.BtnBox}>
          <PrimaryButton>RESET</PrimaryButton>
          <PrimaryButton>CONFIRM</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  startGameContainer: {
    paddingHorizontal: 25,
    paddingTop: 100
  },
  Inner: {
    backgroundColor: '#049382',
    padding: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: 1,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  BtnBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 5
  },
  Input: {
    fontSize: 32,
    color: '#FFC44F',
    borderBottomWidth: 1,
    borderBottomColor: '#FFC44F',
    width: '15%',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
