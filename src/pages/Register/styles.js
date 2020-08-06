import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  label: {
    marginLeft: '8%',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: Colors.mainColor,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    width: '85%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.text,
  },
});

export default styles;
