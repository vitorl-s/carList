import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../consts/colors';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  card: {
    width: Dimensions.get('screen').width - 70,
    alignSelf: 'center',
    backgroundColor: Colors.mainColor,
    padding: 5,
    marginRight: 10,
    borderRadius: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
    padding: 5,
  },
  rightContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    marginTop: 5,
    backgroundColor: Colors.mainColor,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: Colors.text,
  },
});

export default styles;
