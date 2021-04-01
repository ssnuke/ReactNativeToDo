import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    marginLeft: 20,
    marginBottom: 10,
    color: 'white',
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  paragraphText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 35,
    marginRight: 10,
    color: 'white',
  },
  itemContainer: {
    marginRight: 10,
    marginTop: 17,
    backgroundColor: 'lightgrey',
  },
  itemContent: {
    marginTop: 18,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default styles;
