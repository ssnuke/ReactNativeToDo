import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'black',
    paddingTop:Constants.statusBarHeight,
  },
  paragraph: {
    marginLeft: 20,
    color: 'white',
    borderColor:'grey',
    borderBottomWidth:1,
  },
  paragraphText: {
    fontSize: 35,
    marginRight: 10,
    color: 'white',
  },
  paragraphDate: {
    fontSize: 20,
    marginRight: 10,
    color: 'white',
  },
  inputContainer: {
   marginTop: 10,
  },
  inputBox: {
    marginBottom: 3,
    marginLeft:10,
    marginRight: 10,
    borderRadius:3,
    borderColor:'#6c34e3',
    borderBottomWidth:3,
  },
  taskContainer:{
    padding:3,
    marginBottom: 20,
    marginLeft:10,
    marginRight: 10,
    borderRadius:10,
    borderColor:'#6c34e3',
    borderBottomWidth:5,
    borderRightWidth:5,
    borderLeftWidth:5,
  },
  buttonConiainer:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  addTask:{
    marginBottom: 20,
  },
});

export default styles;
