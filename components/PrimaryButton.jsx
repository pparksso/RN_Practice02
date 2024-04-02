import { View, Text, StyleSheet } from 'react-native';

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#630E34',
    width: '48%',
    paddingVertical: 10,
    borderRadius: 100
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
